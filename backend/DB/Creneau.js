import { db } from "../server.js";

/**
 * 
 * @returns {Promise}
 */

export const getAllCreneau =()=>{

   return db.manyOrNone(`SELECT c.id_creneau,c.debut,c.fin,c.jour,g.code_groupe,s.type,m.nom_module,s.code_specialite,l.code_local  
                         FROM 
                         Creneau c
                         LEFT JOIN 
                         Seance s ON c.id_seance = s.id_seance 
                         LEFT JOIN  
                         Module m ON s.code_module = m.code_module
                         LEFT JOIN  
                         EmploisDuTemps edt ON c.id_Emp = edt.id_Emp
                         LEFT JOIN  
                         Groupe g ON edt.id_groupe = g.id_groupe
                         LEFT JOIN  
                         Local l ON c.code_local = l.code_local`)

}



/**SELECT 
    c.id_creneau, 
    c.debut, 
    c.fin, 
    c.jour, 
    g.code_groupe, 
    s.type, 
    m.nom_module, 
    s.code_specialite, 
    l.code_local  
FROM 
    Creneau c
LEFT JOIN 
    Seance s ON c.id_seance = s.id_seance 
LEFT JOIN  
    Module m ON s.code_module = m.code_module
LEFT JOIN  
    EmploisDuTemps edt ON c.id_Emp = edt.id_Emp
LEFT JOIN  
    Groupe g ON edt.id_groupe = g.id_groupe
LEFT JOIN  
    Local l ON c.code_local = l.code_local;

 */

/**
 * 
 * @param {string} id_creneau 
 *  @returns {Promise<object|null>} 
 */
export const getOneCreneauById = (id_creneau) => {
   return db.manyOrNone(`SELECT c.id_creneau,c.debut,c.fin,c.jour,g.code_groupe,s.type,m.nom_module,s.code_specialite,l.code_local  
                         FROM 
                         Creneau c
                         LEFT JOIN 
                         Seance s ON c.id_seance = s.id_seance 
                         LEFT JOIN  
                         Module m ON s.code_module = m.code_module
                         LEFT JOIN  
                         EmploisDuTemps edt ON c.id_Emp = edt.id_Emp
                         LEFT JOIN  
                         Groupe g ON edt.id_groupe = g.id_groupe
                         LEFT JOIN  
                         Local l ON c.code_local = l.code_local
                         WHERE c.id_Creneau=$1 `,[id_creneau])
}
/**
 * 
 * @param {string} code_groupe 
 * @returns {Promise<object|null>} 
 */
export const getAllCreneauByGroupe = (code_groupe) =>{

   return db.manyOrNone(`SELECT c.id_creneau,c.debut,c.fin,c.jour,g.code_groupe,s.type,m.nom_module,s.code_specialite,l.code_local  
                         FROM 
                         Creneau c
                         LEFT JOIN 
                         Seance s ON c.id_seance = s.id_seance 
                         LEFT JOIN  
                         Module m ON s.code_module = m.code_module
                         LEFT JOIN  
                         EmploisDuTemps edt ON c.id_Emp = edt.id_Emp
                         LEFT JOIN  
                         Groupe g ON edt.id_groupe = g.id_groupe
                         LEFT JOIN  
                         Local l ON c.code_local = l.code_local
                         WHERE g.code_groupe=$1 `, [code_groupe] )
}
/**
 * 
 * @param {string} id_creneau 
 * @param {string} debut 
 * @param {string} fin 
 * @param {string} jour 
 * @param {string} id_Emp 
 * @param {string} id_seance 
 * @param {string} code_local 
 * @returns {Promise}
 */
export const updateCreneau=(id_creneau,debut, fin, jour,id_Emp,id_seance,code_local)=>{
   return db.manyOrNone(` UPDATE Creneau SET debut=$1,fin=$2, jour=$3,id_Emp=$4,id_seance=$5,code_local=$6
                          WHERE  id_creneau=$7 `,[debut, fin, jour,id_Emp,id_seance,code_local,id_creneau])
   
}

/**
 * 
 * @param {string} debut 
 * @param {string} fin 
 * @param {string} jour 
 * @param {string} id_Emp 
 * @param {string} id_seance 
 * @param {string} code_local 
 * @returns {Promise}
 */
export const createCreneau=(debut, fin, jour,id_Emp,id_seance,code_local)=>{

   return db.oneOrNone(` insert into Creneau (debut, fin, jour,id_Emp,id_seance,code_local)
                         Values ($1,$2,$3,$4,$5,$6)`,[debut, fin, jour,id_Emp,id_seance,code_local])
}

export const deleteCreneau = (id_creneau) =>{
  return db.oneOrNone(`DELETE FROM Creneau where id_creneau=$1 `,[id_creneau])  
}
