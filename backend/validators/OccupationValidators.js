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

if ( heur_debut==undefined) {
    missingFields.push("heure début");
}else if (!validateTimeFormat(heur_debut)) {
    invalideFields.push("attribut heure début invalide !");
}

if ( heur_fin==undefined) {
    missingFields.push("heure fin");
}else if (!validateTimeFormat(heur_fin)) {
    invalideFields.push("attribut heure fin invalide !");
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
//  Vendrei est exclus ==> occupation inutile  // 
if (jour!== jours.Dimanche && jour!== jours.Lundi && jour!== jours.Mardi && jour!== jours.Mercredi && jour!== jours.Jeudi &&
    jour!== jours.Samedi
    ) {
        res.status(400).json({
            status: "error",
            message: " Erreur dans le jour  ou jour mal choisi  ",
        });
        return;

    }

next();
};

function validateTimeFormat(time) {
    
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;

    return timeRegex.test(time);
}
