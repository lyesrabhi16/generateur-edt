import { selectOccupationById , 
         selectOccupationByDay ,
         DeleteOneOcuupation,
         PutOneOccupation,
         createOneOccupation,
         selectAllOccupation
} from "../DB/Occupation.js";



export const getOccupationDay =(req,res)=>{
const {jour} = req.params;
selectOccupationByDay(jour).then((data)=>{
    const response = {
        status: "success",
        message: "occupation trouvé  pour  "+ jour ,
        Occupation: data,
      };
     
    /*  @MassinS
            ! removed null check
            reason: 
                * 1. if data = [] (let's say for jour = Dimanche), we still get this:
                    {
                        "status": "success",
                        "message": "occupation trouvé  pour  Dimanche",
                        "Occupation": []
                    } 
                * so there is no need to for this null check
                
                ? note please remove this comment after reading it, if you agree 

        --written by @lyesrabhi16  
    */
    res.status(200).json(response)
      
}).catch((err)=>{
    const response = {
        status: "error",
        message: "Erreur pendant la recherche des occupation ",
        error: err,
      };
      res.status(500).json(response);

})
}


export const  getAllOccupation =(req,res)=>{
    selectAllOccupation().then((data)=>{
        const response = {
            status: "success",
            message: "occupations trouvée ",
            Occupations: data,
          };

        /* @MassinS
            ! removed null check
            reason: 
                * 1. if data = [] (if there is no occupation in the db), we still get this:
                    {
                        "status": "success",
                        "message": "occupations trouvée",
                        "Occupations": []
                    } 
                * so there is no need to for this null check,
                * because db.manyOrNone() returns an empty array if there is no data
                
                ? note please remove this comment after reading it, if you agree
                
            --written by @lyesrabhi16
         */
        res.status(200).json(response);

    }).catch((err)=>{
        const response = {
            status: "error",
            message: "Erreur pendant la recherche des occupations ",
            error: err,
          };
          res.status(500).json(response);

    })


}


export const getOccupationId =(req,res)=>{
    const {id_occup} = req.params;
   
    selectOccupationById(id_occup).then((data)=>{
        const response = {
            status: "success",
            message: "une occupation trouvée ",
            Occupation: data,
          };
        

          if(data==null) {
             
                response.status= "Error",
                response.message= "aucune occupation trouvée ",
                response.Occupation= null,
            
              res.status(404).json(response)
              return;
          }
          res.status(200).json(response);
    }).catch((err)=>{
        const response = {
            status: "error",
            message: "Erreur pendant la recherche des occupation ",
            error: err,
          };
          res.status(500).json(response);

    })
}

export const deleteOccupationById =(req,res)=>{
   const {id_occup} = req.params;
   DeleteOneOcuupation(id_occup).then(()=>{
   const response = {
    status : "Success",
    message:"Occupation supprimée",
   }
    res.status(200).json(response);

   }).catch((err)=>{
    const response = {
        status: "error",
        message: "Erreur pendant la suppression ",
        error: err,
      };
      res.status(500).json(response);
   })
  
}

export const updateOccupationById=(req,res)=> {
    const { jour,heur_debut,heur_fin} = req.body;
    const {id_occup} = req.params;
     
    PutOneOccupation(id_occup, jour,heur_debut,heur_fin).then(()=> {
        const response = {
            status : "Success",
            message:"Occupation mise à jour ",
           }
           res.status(200).json(response);
    }).catch((err)=>{
        const response = {
            status: "error",
            message: "Erreur pendant la mise à jour ",
            error: err,
          };
          res.status(500).json(response);
    })
}
export const insertOneOccupation=(req,res)=>{
    const { jour,heur_debut,heur_fin} = req.body;
    createOneOccupation(jour,heur_debut,heur_fin).then(()=>{
        const response = {
            status : "Success",
            message:"Occupation Crée ",
           }
        res.status(201).json(response);

    }).catch((err)=>{
        const response = {
            status: "error",
            message: "Erreur pendant la création ",
            error: err,
          };
          res.status(500).json(response);
    })
}