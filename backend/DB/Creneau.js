import { db } from "../server.js";

/**
 * 
 * @returns {Promise}
 */

/* @MassinS
   * modifed to include the new changes on section table
   returns:
      id_creneau, debut, fin, jour, id_emp,
      id_groupe, code_groupe ,
      id_section, code_section,niveau,
      code_specialite, nom_specialite.
      id_seance, type, 
      code_module, nom_module
   ?--written by @lyesrabhi16
*/

export const getAllCreneau =(code_local)=>{
   let sql = `SELECT c.*, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite, sc.type, m.*
               FROM Creneau c
                     join emploisdutemps emp on c.id_emp = emp.id_emp
                     join groupe g on emp.id_groupe = g.id_groupe
                     join section s on g.id_section = s.id_section
                     join specialite sp on s.code_specialite = sp.code_specialite
                     join seance sc on c.id_seance = sc.id_seance
                     join module m on sc.code_module = m.code_module
               `;
   if (code_local !== undefined){
      sql += ` WHERE c.code_local = $1 `;
   }
   return db.manyOrNone(sql, [code_local]);

}


/**
 * 
 * @param {string} id_creneau 
 *  @returns {Promise<object|null>} 
 */
export const getOneCreneauById = (id_creneau) => {
   return db.oneOrNone(`SELECT c.*, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite, sc.type, m.*
                        FROM Creneau c
                              join emploisdutemps emp on c.id_emp = emp.id_emp
                              join groupe g on emp.id_groupe = g.id_groupe
                              join section s on g.id_section = s.id_section
                              join specialite sp on s.code_specialite = sp.code_specialite
                              join seance sc on c.id_seance = sc.id_seance
                              join module m on sc.code_module = m.code_module
                        WHERE c.id_Creneau=$1 `,[id_creneau])
}
/**
 * 
 * @param {string} code_groupe 
 * @returns {Promise<object|null>} 
 */
export const getAllCreneauByGroupe = (id_groupe) =>{
    console.log(id_groupe);
    return db.manyOrNone(`SELECT c.*, g.id_groupe, g.code_groupe, s.*, sp.nom_specialite, sc.type, m.*
                           FROM Creneau c
                                 join emploisdutemps emp on c.id_emp = emp.id_emp
                                 join groupe g on emp.id_groupe = g.id_groupe
                                 join section s on g.id_section = s.id_section
                                 join specialite sp on s.code_specialite = sp.code_specialite
                                 join seance sc on c.id_seance = sc.id_seance
                                 join module m on sc.code_module = m.code_module
                          WHERE g.id_groupe=$1 `, [id_groupe] );
    
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
                         Values ($1,$2,$3,$4,$5,$6) returning *`,[debut, fin, jour,id_Emp,id_seance,code_local])
}

export const deleteCreneau = (id_creneau) =>{
  return db.oneOrNone(`DELETE FROM Creneau where id_creneau=$1 `,[id_creneau])  
}
