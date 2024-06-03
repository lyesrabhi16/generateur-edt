import {Router } from "express";

import { selectAllLocal,
         selectAllLocalByType,
         selectOneLocalById,
         putOneLocal,
         deleteOneLocal,
         insertOneLocal,
} from "../controllers/LocalController.js";

import { 
    insertOneLocalValidator, putOneLocalValidator, selectAllLocalByTypeValidator
} from "../validators/LocalValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";

const LocalRouter=Router();

LocalRouter.get('/',selectAllLocal);

LocalRouter.get('/types/:type', selectAllLocalByTypeValidator,selectAllLocalByType);
LocalRouter.get('/:code_local',selectOneLocalById);
LocalRouter.post('/', isAdmin,insertOneLocalValidator,insertOneLocal);

LocalRouter.put('/:code_local', isAdmin,putOneLocalValidator,putOneLocal);
LocalRouter.delete('/:code_local', isAdmin,deleteOneLocal);

export default LocalRouter;