import { db } from "../server.js";

export const getAllEnsEtCreneaux=()=>{

    return db.manyOrNone(`SELECT EC.matricule , P.nom , P.Prenom, P.role , EC.id_creneau, C.jour , C.debut , C.fin
                          FROM EnsEtCreneaux EC 
                          left join Personne P on EC.matricule=P.matricule
                          left join Creneau C on EC.id_creneau=C.id_creneau     
    `)
}

export const getAllEnsEtCreneauxById=(matricule)=>{

    return db.manyOrNone(` SELECT EC.matricule , P.nom , P.Prenom, P.role , EC.id_creneau, C.jour , C.debut , C.fin
                           FROM EnsEtCreneaux EC 
                           left join Personne P on EC.matricule=P.matricule
                           left join Creneau C on EC.id_creneau=C.id_creneau
                           WHERE EC.matricule=$1 `,[matricule]);

}

export const createEnsEtCreneau =(matricule,id_creneau)=>{

    return db.oneOrNone("INSERT INTO EnsEtCreneaux(matricule,id_creneau) VALUES($1,$2)",[matricule,id_creneau]);
}

export const updateEnsEtCreneau=(matricule_new,id_creneau_new,matricule,id_creneau)=>{

    return db.oneOrNone("UPDATE EnsEtCreneaux SET matricule=$1,id_creneau=$2 where matricule=$3 AND id_creneau =$4"
                       , [matricule_new,id_creneau_new,matricule,id_creneau]
  )
}

export const deleteEnsEtCreneau=(matricule,id_creneau)=>{

    return db.oneOrNone("DELETE FROM EnsEtCreneaux WHERE matricule=$1 AND id_creneau=$2",[matricule,id_creneau]);
    
}
