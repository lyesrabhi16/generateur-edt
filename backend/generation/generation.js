import { response } from "express";
import { selectGroupes } from "../DB/groupe.js";
import { selectSection } from "../DB/section.js";
import { selectAllSeance } from "../controllers/SeanceController.js";
import { getAllSeance } from "../DB/Seance.js";
import { getAllLocal } from "../DB/Local.js";
import { getAllModuleEns } from "../DB/ModuleEns.js";
import { jours } from "../../constants.js";
import { getAllEnsetOccupByMatricule } from "../DB/EnsEtOccup.js";
import { getAllEnsEtCreneauxById } from "../DB/EnsEtCreneaux.js";
import { getAllCreneau } from "../DB/Creneau.js";

 

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
    let seances = await getAllSeance(section.code_specialite)
    seances.forEach(seance => {seance.remaining_groupes = [...groupes];});
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
    


    const contraints = {
        temps_debut: t_d,
        temps_fin: t_f,
        duree_creneaux : {h:1, m:30},
        nbr_creneaux_par_jour : 6,
        temps_entre_creneaux : 10,
    }

    /// build matrixes for occupancy
    //
    // matricule:  jour    :   1     2    3      4     5     6  (le creneaux n de la journée, est ce qu'il est occupé ou non)
    //    1     : dimanche : false false true false false false 
    //               .
    //               .
    //               .  

    // get all matricules of related enseignants
    const ens_matricules = [];
    Object.keys(ens).forEach(ensM => {
        ens[ensM].forEach(ens => {
            if (!(ens_matricules.find(item => item === ens.matricule))){
                ens_matricules.push(ens.matricule);
            }
        });
    });
    
    // build initial matrixes with all occups set to false
    const ocp_ens = buildOCPMatrix(ens_matricules, jours, contraints.nbr_creneaux_par_jour);
    const ocp_locales = buildOCPMatrix(locales.map(local => local.code_local), jours, contraints.nbr_creneaux_par_jour);
    const ocp_groupes = buildOCPMatrix(groupes.map(groupe => groupe.id_groupe), jours, contraints.nbr_creneaux_par_jour); // emplois du temps de chaque groupe

    // populate the ocp matrixes with true data from db
    // 1. for enseignants
    for (let i = 0; i< Object.keys(ocp_ens).length; i++){
        const matricule = Object.keys(ocp_ens)[i];
        // populate ocp_ens with data from EnsEtOccup    
        const occupations = await getAllEnsetOccupByMatricule(matricule);        
        occupations.forEach(occupation => {
            const {heur_debut, heur_fin, jour} = occupation;
            const heur_debut_f = {h: parseInt(heur_debut.split(':')[0]), m: parseInt(heur_debut.split(':')[1])};
            const heur_fin_f = {h: parseInt(heur_fin.split(':')[0]), m: parseInt(heur_fin.split(':')[1])};
            const periods = getPeriodFromHeurDebutEtHeurFin(heur_debut_f, heur_fin_f, contraints.duree_creneaux);
            periods.forEach(period => {
                ocp_ens[matricule][jour][period] = true;
            });
        });
        // populate ocp_ens with data from EnsEtCreneaux
        const creneaux = await getAllEnsEtCreneauxById(matricule);
        creneaux.forEach(creneau => {
            const {debut, fin, jour} = creneau;
            const heur_debut_f = {h: parseInt(debut.split(':')[0]), m: parseInt(debut.split(':')[1])};
            const heur_fin_f = {h: parseInt(fin.split(':')[0]), m: parseInt(fin.split(':')[1])};
            const periods = getPeriodFromHeurDebutEtHeurFin(heur_debut_f, heur_fin_f, contraints.duree_creneaux);
            periods.forEach(period => {
                ocp_ens[matricule][jour][period] = true;
            });
        });    
    }
    // 2. for locales
    for (let i = 0; i< Object.keys(ocp_locales).length; i++){
        const code_local = Object.keys(ocp_locales)[i];
        // populate ocp_locales with data from Creneaux
        const creneaux = await getAllCreneau(code_local);
        creneaux.forEach(creneau => {
            const {debut, fin, jour} = creneau;
            const heur_debut_f = {h: parseInt(debut.split(':')[0]), m: parseInt(debut.split(':')[1])};
            const heur_fin_f = {h: parseInt(fin.split(':')[0]), m: parseInt(fin.split(':')[1])};
            const periods = getPeriodFromHeurDebutEtHeurFin(heur_debut_f, heur_fin_f, contraints.duree_creneaux);
            periods.forEach(period => {
                ocp_locales[code_local][jour][period] = true;
            });
        });
    }

    //response.ocp_ens = ocp_ens;
    //response.ocp_locales = ocp_locales;
    //response.ocp_groupes = ocp_groupes;

    // TODO: build the creneaux lists for each groupe

     // creneaux[jour][period][groupe]
     const creneaux = {};
    
    Object.keys(jours).forEach(jour => {
        creneaux[jour] = {};
        for (let period = 0; period < contraints.nbr_creneaux_par_jour; period++) {
            creneaux[jour][period] = {};
            // check if all groupes are available, pour avoir un cours
            const all_groupes_available = groupes.every(groupe => {
                return !ocp_groupes[groupe.id_groupe][jour][period];
            });
            if (all_groupes_available){
                // check for an available Amphi
                const amphi = locales.find(local => (local.type === 'Amphi') && !ocp_locales[local.code_local][jour][period]);
                if (amphi){ 
                    
                    for (let c = 0; c < seances.length; c++) {
                        const seance = seances[c];
                        if (seance.type !== 'Cours') {
                          continue;
                        }
                        let enseignants = ens[seance.code_module];
                        let enseignant = undefined;
                        let b=true;
                        while (b){
                            if (enseignants.length === 0){
                                b = false;
                                break;
                            }
                            enseignant = getEnseignantWithHighestPriorite(enseignants);

                            if (!ocp_ens[enseignant.matricule][jour][period]){
                                b = false;   
                            }
                            else{
                                enseignants = enseignants.filter(ens => ens.matricule !== enseignant.matricule);
                            }                             
                        }
                        if (enseignant !== undefined){
                            const creneau = {
                                period: period,
                                jour: jour,
                                enseignant: enseignant,
                                seance: seance,
                                locale: amphi,
                            };
                            groupes.forEach(groupe => {
                                ocp_groupes[groupe.id_groupe][jour][period] = true;
                                creneaux[jour][period][groupe.code_groupe] = creneau;
                                seance.remaining_groupes = [...seance.remaining_groupes.filter(g => g.id_groupe !== groupe.id_groupe)];
                            });
                            ocp_ens[enseignant.matricule][jour][period] = true;
                            ocp_locales[amphi.code_local][jour][period] = true;
                            if (seance.remaining_groupes.length === 0){
                                seances = seances.filter(s => s.id_seance !== seance.id_seance);
                            }
                            break;
                        }
                    }

                }
                const occupied = groupes.every(groupe => {
                    ocp_groupes[groupe.id_groupe][jour][period] === true;
                });
                if (occupied){
                    continue;
                }
            }
            
            // if not 
            for (let s = 0; s < seances.length; s++) {
                // check if all groupes are occupied and break if so
                const all_groupes_occupied = groupes.every(groupe => {
                    return ocp_groupes[groupe.id_groupe][jour][period];
                });
                if (all_groupes_occupied){
                    break;
                };

                // try to find a seance with an enseignant and a locale for a groupe in this period
                const seance = seances[s];
                if (seance.type === 'Cours') {
                    continue;
                }
                let enseignants = ens[seance.code_module];
                // try to find an enseignant for the seance
                let enseignant = undefined;
                let b=true;
                while (b){
                    if (enseignants.length === 0){
                        b = false;
                        break;
                    }
                    enseignant = getEnseignantWithHighestPriorite(enseignants);

                    if (!ocp_ens[enseignant.matricule][jour][period]){
                        b = false;   
                    }
                    else{
                        enseignants = enseignants.filter(ens => ens.matricule !== enseignant.matricule);
                    }                             
                }
                if (enseignant !== undefined){
                    // try to find a locale for the seance
                    const locale = locales.find(local => (!ocp_locales[local.code_local][jour][period]) && (local.type === 'Salle'+seance.type));
                    if (locale){
                        // try to find a groupe for the seance
                        const groupe = groupes.find(groupe => {
                            if ((!ocp_groupes[groupe.id_groupe][jour][period]) && ( seance.remaining_groupes.find(g => g.id_groupe === groupe.id_groupe) !== undefined )){
                                return groupe
                            }
                        } );
                        if(groupe){

                            const creneau = {
                                period: period,
                                jour: jour,
                                enseignant: enseignant,
                                seance: seance,
                                locale: locale,
                            };
                            ocp_groupes[groupe.id_groupe][jour][period] = true;
                            seance.remaining_groupes = [...seance.remaining_groupes.filter(g => g.id_groupe !== groupe.id_groupe)];
                            ocp_ens[enseignant.matricule][jour][period] = true;
                            ocp_locales[locale.code_local][jour][period] = true;
                            creneaux[jour][period][groupe.code_groupe] = creneau;
                            if (seance.remaining_groupes.length === 0){
                                seances = seances.filter(s => s.id_seance !== seance.id_seance);
                            }
                        }
                    }
                }  
            };


        }
    });
    response.creneaux = creneaux;
    
    if (seances.length > 0){
        response.error = 'Some seances have not been scheduled';
        response['unscheduled-seances'] = seances;
        response['ocp_ens'] = ocp_ens;
        response['ocp_locales'] = ocp_locales;
        response['ocp_groupes'] = ocp_groupes;
    }
    else{

        response.message = 'All seances have been scheduled';
    }

    res.status(200).json(response);

};

const getPeriodFromHeurDebutEtHeurFin = (heur_debut, heur_fin, duree_creneaux)=>{
    const debut = new Date();
    const fin = new Date();
    debut.setUTCHours(heur_debut.h, heur_debut.m);
    fin.setUTCHours(heur_fin.h, heur_fin.m);

    const periods = [];
    let i = 0;
    while (debut < fin){
        periods.push(i);
        i++;
        debut.setUTCMinutes(debut.getUTCMinutes() + duree_creneaux.m);
        debut.setUTCHours(debut.getUTCHours() + duree_creneaux.h);
    }

    return periods;
}

const buildOCPMatrix = (ids, jours, nbr_creneaux_par_jour)=>{
    const ocp = {};
    for (let i = 0; i < ids.length; i++) {
        ocp[ids[i]] = {};
        Object.keys(jours).forEach(jour => {
            ocp[ids[i]][jour] = [];
            for (let j = 0; j < nbr_creneaux_par_jour; j++) {
                ocp[ids[i]][jour][j]= false;                
            }
        });
    }
    return ocp;
}

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