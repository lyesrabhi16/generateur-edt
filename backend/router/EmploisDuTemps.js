import { Router } from "express";

import { selectAllEmplois,
         selectOneEmploisById,
         selectOneEmploisByGroupe,
         insertOneEmplois,
         deleteOneEmplois,
         updateOneEmplois,
         deleteOneEmploisByIdGroupe

} from "../controllers/EmploisController.js";
import { insertOneEmploisValidator } from "../validators/emploisDutemps.js";

const EmploisRouter = Router();

EmploisRouter.get('/',selectAllEmplois);
EmploisRouter.get('/:id_Emp',selectOneEmploisById);

EmploisRouter.get('/groupes/:id_groupe',selectOneEmploisByGroupe);

EmploisRouter.post('/', insertOneEmploisValidator,insertOneEmplois);
EmploisRouter.delete('/:id_emp',deleteOneEmplois);
EmploisRouter.put('/:id_emp', insertOneEmploisValidator,updateOneEmplois);
EmploisRouter.delete('/groupes/:id_groupe',deleteOneEmploisByIdGroupe);

export default EmploisRouter;
