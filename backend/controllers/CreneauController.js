import { getAllCreneau,
         getOneCreneauById,
         getAllCreneauByGroupe,
         updateCreneau,
         createCreneau,
         deleteCreneau
} from "../DB/Creneau.js";

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
        message:"Tout les creneaux sont trouvés",
        Creneaux: data
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
    const { code_groupe } = req.params;
     getAllCreneauByGroupe(code_groupe).then((data)=>{
        const response={
            status:"Success",
            message:"Tout les creneaux sont trouvés de ce groupe "+ code_groupe ,
            Creneaux: data
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
