import { getAllCreneau,
         getOneCreneauById,
         getAllCreneauByGroupe,
         updateCreneau,
         createCreneau,
         deleteCreneau,
         getAllCreneauBySection,
         getCreneaux
} from "../DB/Creneau.js";
import { getAllCreneauEns } from "../DB/EnsEtCreneaux.js";
import { getAllEnsetOccupByMatricule } from "../DB/EnsEtOccup.js";
import { correctTimeFormat } from "../EmpAsFile/emp_xlsx.js";

export const selectAllCreneau = (req,res) =>{

   getAllCreneau().then((data)=>{
    const response={
        status:"Success",
        message:"Tout les creneaux sont trouvés",
        Creneaux: data
       }
       res.status(200).json(response);

   }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la recherche des creneaux",
            erreur:err
           }
          res.status(500).json(response);
    })
}
export const selectOneCreneauById=(req,res) =>{
 
    const {id_creneau} = req.params;
  getOneCreneauById(id_creneau).then((data)=>{
    const response={
        status:"Success",
        message:"creneau trouvé",
        Creneau: data
       }

       if(data===null) {
        response.status='Error';
        response.message='Aucune creneau trouvé'
        return res.status(404).json(response)  
       }

       res.status(200).json(response);

  }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la recherche de ce creneau",
            erreur:err
           }
          res.status(500).json(response);
    })

}

export const selectAllCreneauByGroupe =(req,res)=>{
    const { id_groupe } = req.params;
    console.log(id_groupe);
     getAllCreneauByGroupe(id_groupe).then((data)=>{
        const response={
            status:"Success",
            message:"Tout les creneaux sont trouvés du groupe: "+ id_groupe ,
            Creneaux: data
           }
    
    
           res.status(200).json(response);
     }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la recherche des creneaux",
            erreur:err
           }
          res.status(500).json(response);
    })

}

export const selectAllCreneauBySection =(req,res)=>{
    const { id_section, semestre, annee } = req.params;
    console.log(`GET ALL CRENEAUX ${id_section} ${semestre} ${annee}`);
     getAllCreneauBySection(id_section, semestre, annee).then((data)=>{

        const creneaux = {};

        data.forEach(creneau => {
            if(creneaux[creneau.jour] !== undefined){
                return;
            }
            creneaux[creneau.jour] = {};
            const creneauxJour = data.filter(c => c.jour === creneau.jour);
            for (let index = 0; index < creneauxJour.length; index++) {
                const c = creneauxJour[index];
                if(creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`] === undefined){
                    creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`] = {
                        debut: correctTimeFormat(c.debut),
                        fin: correctTimeFormat(c.fin),
                    };
                }
                if(creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe] === undefined){
                    creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe] = {};
                }
                creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe]["seance"] = {
                    "id_seance": c.id_seance,
                    "type": c.type_seance,
                    "niveau": c.niveau,
                    "semestre": c.semestre,
                    "nom_module": c.nom_module,
                    "nom_specialite": c.nom_specialite,
                    "code_module": c.code_module,
                    "code_specialite": c.code_specialite
                }
                creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe]["locale"] = {
                    "code_local": c.code_local
                }
                creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe]["enseignant"] = {
                    "matricule": c.matricule,
                    "nom": c.nom,
                    "prenom": c.prenom,
                    "role": c.role,
                    "charges": c.charges,
                }
                creneaux[creneau.jour][`${correctTimeFormat(c.debut)}-${correctTimeFormat(c.fin)}`][c.code_groupe]["groupe"] = {
                    "id_groupe": c.id_groupe,
                    "code_groupe": c.code_groupe,
                    "id_section": c.id_section,
                    "code_section": c.code_section,
                    "niveau": c.niveau,
                    "code_specialite": c.code_specialite,
                    "nom_specialite": c.nom_specialite,
                }
            }
        });

        const response={
            status:"Success",
            message:"Tout les creneaux sont trouvés de la section: "+ id_section ,
            Creneaux: creneaux
           }
           res.status(200).json(response);
     }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la recherche des creneaux",
            erreur:err
           }
          res.status(500).json(response);
    })

}

export const putOneCreneau = (req,res)=>{
    const {id_creneau} = req.params;
    const { debut, fin, jour,id_Emp,id_seance,code_local } = req.body;
    updateCreneau(id_creneau,debut, fin, jour,id_Emp,id_seance,code_local).then(()=>{
        
        const response={
            status:"Success",
            message:"creneau mis à jour "
           }
           res.status(200).json(response);
    }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la mise à jour  de creneau",
            erreur:err
           }
          res.status(500).json(response);
    })
}
export const insertOneCreneau = (req,res)=>{

const { debut, fin, jour,id_Emp,id_seance,code_local } = req.body;
createCreneau(debut, fin, jour,id_Emp,id_seance,code_local ).then(()=>{
    const response={
        status:"Success",
        message:"creneau créé "
       }
       res.status(200).json(response);

}).catch((err)=>{
    const response={
        status:"Error",
        message:"Erreur pendant la création  de creneau",
        erreur:err
       }
      res.status(500).json(response);
})


}

export const deleteOneCreneau =(req,res)=>{
    const {id_creneau}=req.params;
    deleteCreneau(id_creneau).then(()=>{
        const response={
            status:"Success",
            message:"creneau supprimé "
           }
           res.status(200).json(response);
    }).catch((err)=>{
        const response={
            status:"Error",
            message:"Erreur pendant la suppression de creneau",
            erreur:err
           }
          res.status(500).json(response);
    })
}

export const verificationCreneau = async (req, res) => {
    const { debut, fin, jour, matricule, code_local, annee, semestre } = req.body;
    const messages = [];
    const local = await getCreneaux(debut, fin, jour, code_local).catch(err => {
        console.log(err);
        return res.status(500).json({
            status: "Error",
            message: "Erreur pendant la recherche des creneaux",
            erreur: err,
        });
    });
    if (local.length > 0){
        console.log(local);
        messages.push("Local déjà occupé");
    }
    const ensO = await getAllEnsetOccupByMatricule(matricule, jour, debut, fin).catch(err => {
        console.log(err);
        return res.status(500).json({
            status: "Error",
            message: "Erreur pendant la recherche d'occupations de l'enseignant",
            erreur: err,
        });
    });
    if (ensO.length > 0){
        console.log(ensO);

        messages.push("Enseignant déjà occupé");
    }

    const ensCs = await getAllCreneauEns(matricule, annee, semestre, jour).catch(err =>{
        console.log(err);
        return res.status(500).json({
            status: "Error",
            message: "Erreur pendant la recherche des creneaux de l'enseignant",
            erreur: err,
        });
    })

    let ensCO = false;
    for (let index = 0; index < ensCs.length; index++) {
        const c = ensCs[index];
        if ((c.debut <= debut && c.fin >= debut) || (c.debut <= fin && c.fin >= fin) ||  (c.debut >= debut && c.fin <= fin) || (c.debut <= debut && c.fin >= fin)){
            console.log(c);
            ensCO = true;
            break;
        }
    }

    if(ensCO){
        messages.push("Enseignant déjà occupé");
    }
    if (messages.length > 0){
        return res.status(400).json({
            status: "Error",
            message: messages,
        });
    }
    return res.status(200).json({
        status: "Success",
        message: "Créneau disponible",
    });
}