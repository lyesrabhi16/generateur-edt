import { jours  } from "../../constants.js";



export const addOccupationValidator = (req,res,next)=>{

const {
    jour,
    heur_debut,
    heur_fin,
} = req.body;

const missingFields = [];
const invalideFields = [];


if ( jour==undefined) {
    missingFields.push("jour");
}
else if (!validateJour(jour)) {
    invalideFields.push("attribut jour invalide !"); 
}

/* @MassinS
    ! modified
    * 1. changed "heure début" and "heure fin" (in the missingFields/invalideFields push)
    *    to match the acutal attribute names used 
    *    by the API : "heur_debut" and "heur_fin

    ? note : remove this comment after reading

    --written by @lyesrabhi16
*/

if ( heur_debut==undefined) {
    missingFields.push("heur_debut");
}else if (!validateTimeFormat(heur_debut)) {
    invalideFields.push("attribut heur_debut invalide !");
}

if ( heur_fin==undefined) {
    missingFields.push("heur_fin");
}else if (!validateTimeFormat(heur_fin)) {
    invalideFields.push("attribut heur_fin invalide !");
}


if ( missingFields.length>0) {
    res.status(400).json({
        status: "error",
        message:
          "missing required fields: " +
          missingFields 
      });
      return;
}


if ( invalideFields.length>0) {
    res.status(400).json({
        status: "error",
        message:
          " invalide fields : " + invalideFields
      });
      return;
}

const heureDebut = parseInt(heur_debut.split(":")[0]); 
const heureFin = parseInt(heur_fin.split(":")[0])

if ( heureDebut < 8 || heureDebut > 18 || heureFin < 8 ) {
    res.status(400).json({
        status: "error",
        message: " occupation inutile ",
    });
    return;
}

if (heureDebut>heureFin || heureDebut==heureFin) {
    res.status(400).json({
        status: "error",
        message: " heure debut > heure fin  ",
    });
    return;
    
}
/* @MassinS
    ! modified 
    extracted the check into a function : validateJour
    because i needed else where

    ? note: remove this comment after reading 

    --written by @lyesrabhi16
*/
if (!validateJour(jour)) {
        res.status(400).json({
            status: "error",
            message: " Erreur dans le jour  ou jour mal choisi  ",
        });
        return;

    }

next();
};

/* @MassinS
    ! added (optional)
    a validator for the getOccupationDay route, which checks if jour is correct or not
    
    ? note: remove this comment after reading, 
    ? if you decide to remove the validator be sure to remove it from the router as well
    
    --written by @lyesrabhi16
*/
export const getOccupationDayValidator = (req,res,next)=>{
    const {jour} = req.params;
    if (!validateJour(jour)) {
        res.status(400).json({
            status: "error",
            message: "jour invalide",
        });
        return;
    }
    next();
};

/**
 * Validates the format of a time string.
 *
 * @param {string} time - The time string to validate.
 * @returns {boolean} - True if the time string is in the format "HH:MM", false otherwise.
 */
function validateTimeFormat(time) {
    
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;

    return timeRegex.test(time);
}

/* @MassinS
    ! added
    a function to validate the day, 
    because we need it in multiple places.
    may move it into its own file if we need it in more places in the future

    ? note: remove this comment after reading 

    --written by @lyesrabhi16
*/

/**
 * Validates the given day.
 *
 * @param {string} jour - The day to validate.
 * @returns {boolean} - True if the day is valid, false otherwise.
 */
function validateJour(jour) {
    //  Vendrei est exclus ==> occupation inutile  // 
    const valid_days = Object.values(jours).filter((j) => j !== "Vendredi");    
    return valid_days.includes(jour);
};

