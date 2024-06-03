import {Router } from "express";
import { selectAllCreneau,
         selectOneCreneauById,
         selectAllCreneauByGroupe,
         putOneCreneau,
         insertOneCreneau,
         deleteOneCreneau

} from "../controllers/CreneauController.js";

import { addCreneauValidators } from "../validators/CreneauValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";

const CreneauRouter = Router();

CreneauRouter.get('/',selectAllCreneau);
CreneauRouter.get('/:id_creneau', selectOneCreneauById  );
CreneauRouter.get('/groupes/:id_groupe',selectAllCreneauByGroupe);
CreneauRouter.put('/:id_creneau', isAdmin,addCreneauValidators,putOneCreneau);
CreneauRouter.post('/', isAdmin,addCreneauValidators,insertOneCreneau);
CreneauRouter.delete('/:id_creneau', isAdmin,deleteOneCreneau);


export default CreneauRouter;

