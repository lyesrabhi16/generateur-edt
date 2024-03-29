import { Router } from "express";

import { selectAllEmplois,
         selectOneEmploisById,
         selectOneEmploisByGroupe,
         insertOneEmplois,
         deleteOneEmplois,
         updateOneEmplois

} from "../controllers/EmploisController.js";

const EmploisRouter = Router();

EmploisRouter.get('/',selectAllEmplois);
EmploisRouter.get('/:id_Emp',selectOneEmploisById);
EmploisRouter.get('/groupes/:code_groupe',selectOneEmploisByGroupe);
EmploisRouter.post('/',insertOneEmplois);
EmploisRouter.delete('/:id_emp',deleteOneEmplois);
EmploisRouter.put('/:id_emp',updateOneEmplois);

export default EmploisRouter;
