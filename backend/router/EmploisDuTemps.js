import { Router } from "express";

import { selectAllEmplois,
         selectOneEmploisById,
         selectOneEmploisByGroupe,
         insertOneEmplois,
         deleteOneEmplois,
         updateOneEmplois

} from "../controllers/EmploisController.js";
import { insertOneEmploisValidator } from "../validators/emploisDuTempsValidators.js";

const EmploisRouter = Router();

EmploisRouter.get('/',selectAllEmplois);
EmploisRouter.get('/:id_Emp',selectOneEmploisById);
/* @MassinS
    ! modified
    * changed code_groupe to id_groupe
    * because code_groupe is not unique
    
    ? remove after reading

    --written by @lyesrabhi16
*/
EmploisRouter.get('/groupes/:id_groupe',selectOneEmploisByGroupe);
/* @MassinS
    ! modified
    * added validator for insertOneEmplois and updateOneEmplois routes
    ? remove after reading
    --written by @lyesrabhi16
*/
EmploisRouter.post('/', insertOneEmploisValidator,insertOneEmplois);
EmploisRouter.delete('/:id_emp',deleteOneEmplois);
EmploisRouter.put('/:id_emp', insertOneEmploisValidator,updateOneEmplois);

export default EmploisRouter;
