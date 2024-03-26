import { db } from "../server.js";
/**
@returns {Promise}
 */ 
export const selectAllModule = () => {
    return db.manyOrNone("SELECT * FROM Module");
  };
/** 
 @param {string} code_module 
 @param {string} nom_module
 @returns {Promise<object|null>} 
*/
export const UpdateModule=(code_module,nom_module)=>{
    return db.oneOrNone("UPDATE Module SET nom_module=$1 WHERE code_module=$2",[nom_module,code_module])
}
/** 
 @param {string} code_module 
 @param {string} nom_module
 @returns {Promise<object|null>} 
*/
export const createModule=(code_module,nom_module)=>{
return db.oneOrNone("INSERT INTO Module (code_module,nom_module) VALUES ($1,$2)",[code_module,nom_module]);
}

/** 
 @param {string} code_module 
 @returns {Promise<object|null>} 
*/
export const deleteModule=(code_module)=>{
    return db.oneOrNone("DELETE FROM Module WHERE code_module=$1",[code_module]);
}
