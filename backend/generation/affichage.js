//! this is just a script for displaying the generated emp
//! formated in this way: 
//!     Jour: 
//!          Groupe :  
//!                     debut fin type module local

import { jours as jours_constant } from "../../constants.js";

export const affichage = (creneaux) => {

    const jours = Object.keys(jours_constant);
    jours.forEach(jour => {
        console.log(`${jour}:`);
        Object.keys(creneaux).forEach(groupe => {
            const creneau_groupes = creneaux[groupe].filter(creneau => creneau.jour === jour);
            console.log(`\t${groupe}:`);
            creneau_groupes.forEach(creneau => {
                const seance = creneau["seance"];
                const local = creneau["local"];
                console.log(`\t\t ${creneau.debut} ${creneau.fin} ${seance.type} ${seance.code_module} ${local.code_local}`);
            });
        });
    
    });
};