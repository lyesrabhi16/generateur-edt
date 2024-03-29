import { db } from "../server.js";

export const  getAllEnsetOccup =()=>{

    return db.manyOrNone ( `SELECT E.matricule,P.nom,P.prenom,O.id_occup,O.jour,O.heur_debut, O.heur_fin 
                           FROM EnsEtOccup E 
                           left join Personne P on E.matricule=P.matricule
                           left join Occupation O ON E.id_occup=O.id_occup
    ` )
} 

export const getAllEnsetOccupById=(matricule)=>{
return db.manyOrNone(`SELECT matricule,nom,prenom,id_occup,jour,heur_debut, heur_fin 
                     FROM EnsEtOccup E 
                     left join Personne P on E.matricule=P.matricule
                     left join Occupation O ON E.id_occup=O.id_occup 
                     WHERE E.matricule =$1
                     `,[matricule]);
                     
}


export const createEnsetOccup =(matricule,id_occup )=>{
    return db.oneOrNone("INSERT INTO EnsEtOccup(matricule,id_occup) VALUES ( $1,$2)",[matricule,id_occup]);
}

export const updateEnsEtOccup=(matricule,id_occup)=>{

    return db.oneOrNone("UPDATE EnsEtOccup SET matricule=$1,id_occup=$2",[matricule,id_occup]);

}

export const deleteEnsEtOccup = (matricule,id_occup) =>{

    return db.oneOrNone("DELETE FROM EnsEtOccup WHERE matricule=$1 AND id_occup=$2",[matricule,id_occup]);

}

