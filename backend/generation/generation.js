import { response } from "express";
import { selectGroupes } from "../DB/groupe.js";
import { selectSection } from "../DB/section.js";
import { selectAllSeance } from "../controllers/SeanceController.js";
import { getAllSeance } from "../DB/Seance.js";
import { getAllLocal } from "../DB/Local.js";
import { getAllModuleEns } from "../DB/ModuleEns.js";
import { jours } from "../../constants.js";

 

export const generate = async (req, res) => {
    const { id_section } = req.params;
    const response = {};
    // get section info
    const section = await selectSection(id_section);
    response.section = section;
    
    // get all groupes of the section
    const groupes = await selectGroupes(id_section);
    response.groupes = groupes;
    
    // get All seances related to the section specialite
    const seances = await getAllSeance(section.code_specialite);
    response.seances = seances;

    const modules = [];
    // get All modules for these seances
    seances.map(seance => {
        if (!(modules.find(item => item === seance.code_module))){
            modules.push(seance.code_module);
        }
    });
    response.modules = modules;

    // get All Enseignants that teach each module
    const ens = {};
    for (let i = 0; i < modules.length; i++) {
        const module = modules[i];
        const EnsM = await getAllModuleEns(module);
        ens[module] = EnsM;
    }
    response.ens = ens;

    // get All locales
    const locales = await getAllLocal();
    response.locales = locales;

    const t_d = new Date();
    t_d.setUTCHours(8, 0); 
    
    const t_f = new Date();
    t_f.setUTCHours(18, 0);
    

    console.log(t_d, t_f);

    const contraints = {
        temps_debut: t_d,
        temps_fin: t_f,
        duree_creneaux : {h:1, m:30},
        nbr_creneaux_par_jour : 6,
        temps_entre_creneaux : 10,
    }
    // creneaux[jour] = [creneaux n du jour]
     const creneaux = {};

    Object.keys(jours).forEach(jour => {
        const creneaux_jour = [];

        const time = contraints.temps_debut;
        while ( time.getUTCHours < contraints.temps_fin.getUTCHours){
            const creneau = new Creneau(
                {h: time.getUTCHours(), m: time.getUTCMinutes()},
                {h: time.getUTCHours() + contraints.duree_creneaux.h, m: time.getUTCMinutes() + contraints.duree_creneaux.m},
                jour
            );

            for (let i = 0; i < seances.length; i++) {
                const seance = seances[i];
                const ens_m = ens[seance.code_module];
                let enseignant = getEnseignantWithHighestPriorite(ens_m);
                while (! checkAvailabilityEnseignant(enseignant) && ens_m.length > 0){
                    ens_m = ens_m.filter(ens => ens.matricule !== enseignant.matricule)
                    enseignant = getEnseignantWithHighestPriorite(ens_m);
                };
                if (seance !== undefined && ens !== undefined){
                    seances = seances.filter(s => s.id_seance !== seance.id_seance);
                    creneau.setSeance(seance);
                    creneau.setEnseignant(enseignant);
                    creneaux_jour.push(creneau);
                    break;
                }
            }
        }

        creneaux[jour] = creneaux_jour;
    });
    res.creneaux = creneaux;
 
    res.status(200).json(response);

};

const getEnseignantWithHighestPriorite = (ens)=>{
    let d = 0;
    let f = ens.length - 1;
    let max = ens[0];
    while (d<=f){
        if ( max.priorite > ens[d].priorite){
            max = ens[d];
        }

        if ( max.priorite > ens[f].priorite){
            max = ens[f];
        }

        d++;
        f--;
    }
    return max;
}

const checkAvailabilityEnseignant = (ens, time_debut, time_fin)=>{
    // TODO: check availability for a teacher at a specific time
    // TODO: or make matrixes to hold data about occupancy for ens, locales, groupes
};

class Creneau {
    
    constructor(debut, fin, jour, id_seance, code_local, enseignants){
        this.debut = debut;
        this.fin = fin;
        this.jour = jour;

    }

    setSeance(seance){
        this.seance = seance;
    }
    getSeance(){
        return this.seance;
    }
}