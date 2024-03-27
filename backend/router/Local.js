import {Router } from "express";

import { selectAllLocal,
         selectAllLocalByType,
         selectOneLocalById,
         putOneLocal,
         deleteOneLocal,
         insertOneLocal,
} from "../controllers/LocalController.js";

import {
    addLocalValidator
} from "../validators/LocalValidators.js";

const LocalRouter=Router();

LocalRouter.get('/',selectAllLocal);
LocalRouter.get('/types/:type',selectAllLocalByType);
LocalRouter.get('/:code_local',selectOneLocalById);
LocalRouter.post('/',addLocalValidator,insertOneLocal);
LocalRouter.put('/:code_local',addLocalValidator,putOneLocal);
LocalRouter.delete('/:code_local',deleteOneLocal);

export default LocalRouter;