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


export const getAllCreneauEns = (matricule,annee,semestre)=>{

    return db.manyOrNone(`SELECT E.matricule, P.nom , P.prenom ,C.jour, C.debut,C.fin , S.type,S.niveau , S.code_specialite  , g.id_section , Emp.semestre ,L.code_Local , L.type  from ensetcreneaux E  
                          left join personne P on E.matricule=P.matricule
                          left join Creneau C on E.id_creneau=C.id_creneau 
                          left join Seance S on C.id_seance = S.id_seance
                          left join Local L on C.code_local=L.code_local
                          left join Specialite Sp on Sp.code_specialite = S.code_specialite
                          left join emploisdutemps Emp on Emp.id_emp =C.id_emp
                          left join groupe g on g.id_groupe= Emp.id_groupe
                          left join section sn on sn.id_section=g.id_section
                          WHERE E.matricule=$1 and Emp.annee=$2 and Emp.semestre=$3
    `,[matricule,annee,semestre]);

    
}
