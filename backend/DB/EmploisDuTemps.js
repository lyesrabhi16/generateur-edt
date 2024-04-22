import { db } from "../server.js";

/* @MassinS
    ! modified
    * changed to include the new changes on section table
*/

export const getAllEmplois = () => {
 
    return db.manyOrNone(`SELECT E.id_emp, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite
                            FROM emploisdutemps E 
                            left join groupe G on E.id_groupe=G.id_groupe
                            join section s on G.id_section = s.id_section
                            join specialite sp on s.code_specialite = sp.code_specialite;`)  

}

export const getOneEmploisById = (id_Emp) => {

    return db.oneOrNone(`SELECT E.id_emp, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite
                            FROM emploisdutemps E 
                            left join groupe G on E.id_groupe=G.id_groupe
                            join section s on G.id_section = s.id_section
                            join specialite sp on s.code_specialite = sp.code_specialite
                            where E.id_emp = $1;` , [id_Emp]);
}

export const getOneEmploisByGroupe = (id_groupe) =>{
   
   return db.oneOrNone(`SELECT E.id_emp, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite
                        FROM emploisdutemps E 
                        left join groupe G on E.id_groupe=G.id_groupe
                        join section s on G.id_section = s.id_section
                        join specialite sp on s.code_specialite = sp.code_specialite
                        where G.id_groupe = $1;` ,[id_groupe]);
   
}

export const createEmplois = (id_groupe, niveau, semesetre) =>{

    return db.oneOrNone("INSERT INTO emploisdutemps(id_groupe) values($1, $2, $3) ",[id_groupe, niveau, semesetre]);

}

export const updateEmplois =(id_Emp,id_groupe, niveau, semesetre) =>{
    return db.oneOrNone("UPDATE emploisdutemps SET id_groupe=$1, niveau=$2, semestre=$3 WHERE id_Emp=$4 " , [id_groupe,niveau,semesetre,id_Emp]);
}

export const deleteEmplois =(id_Emp) => {
    return db.oneOrNone("DELETE FROM emploisdutemps where id_emp=$1 ",[id_Emp]);

}

