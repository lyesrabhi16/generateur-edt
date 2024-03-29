import { db } from "../server.js";

export const getAllEmplois = () => {
 
    return db.manyOrNone("SELECT * FROM emploisdutemps E left join groupe G on E.id_groupe=G.id_groupe  ;")  

}

export const getOneEmploisById = (id_Emp) => {

    return db.manyOrNone("SELECT * FROM emploisdutemps E left join groupe G on E.id_groupe=G.id_groupe         WHERE E.id_Emp=$1 " , [id_Emp]);
}

export const getOneEmploisByGroupe = (code_groupe) =>{
   
   return db.oneOrNone("SELECT * FROM emploisdutemps  E left join groupe G on E.id_groupe=G.id_groupe   WHERE G.code_groupe=$1",[code_groupe]);
   
}

export const createEmplois = (id_groupe) =>{

    return db.oneOrNone("INSERT INTO emploisdutemps(id_groupe) values($1) ",[id_groupe]);

}

export const updateEmplois =(id_Emp,id_groupe) =>{
    return db.oneOrNone("UPDATE emploisdutemps SET id_groupe=$1 WHERE id_Emp=$2 " , [id_groupe,id_Emp]);
}

export const deleteEmplois =(id_Emp) => {
    return db.oneOrNone("DELETE FROM emploisdutemps where id_emp=$1 ",[id_Emp]);

}

