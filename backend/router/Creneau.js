import {Router } from "express";
import { selectAllCreneau,
         selectOneCreneauById,
         selectAllCreneauByGroupe,
         putOneCreneau,
         insertOneCreneau,
         deleteOneCreneau

} from "../controllers/CreneauController.js";

import { addCreneauValidators } from "../validators/CreneauValidators.js";

const CreneauRouter = Router();

CreneauRouter.get('/',selectAllCreneau);
CreneauRouter.get('/:id_creneau', selectOneCreneauById  );
/* @MassinS
    !modified
    * changed code_groupe to id_groupe because code_groupe is not unique
    * meaning we can have G5 in GL and G5 in MI
    
    ? remove after reading
    
    --written by @lyesrabhi16
 */
CreneauRouter.get('/groupes/:id_groupe',selectAllCreneauByGroupe);
CreneauRouter.put('/:id_creneau',addCreneauValidators,putOneCreneau);
CreneauRouter.post('/',addCreneauValidators,insertOneCreneau);
CreneauRouter.delete('/:id_creneau',deleteOneCreneau);


export default CreneauRouter;

