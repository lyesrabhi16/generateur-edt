import { TypeSeance } from "../../constants.js";

export const addSeanceValidator =(req,res,next)=>{
    const {type,code_module,code_specialite} =req.body;


    const missingFields =[];
    
    if(!type) {
     missingFields.push("attribut type manquant , ");
    }
    if(!code_module) {
        missingFields.push("attribut code_module manquant , ");
    }
    if(!code_specialite) {
        missingFields.push("attribut code_specialite manquant ");
    }

    if (missingFields.length>0) {
 
    return res.status(400).json({
        status:"Error",
        message: missingFields
    })
    }
     
    if ( type!== TypeSeance.Cours && type !== TypeSeance.TD && type!==TypeSeance.TP) {
        return res.status(400).json({
            status:"Error",
            message: " Type de séance est invalide "
        })
    }

next();
}