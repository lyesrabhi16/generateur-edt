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

const LocalRouter=Router();

LocalRouter.get('/',selectAllLocal);
/* @MassinS
    ! modified
        * added validator for selectAllLocalByType route to get
        * a better error message for an invalid type (400 Bad Request) 
        * instead of (500 Internal Server Error)
    ? remove after reading

    --written by @lyesrabhi16
 */
LocalRouter.get('/types/:type', selectAllLocalByTypeValidator,selectAllLocalByType);
LocalRouter.get('/:code_local',selectOneLocalById);
LocalRouter.post('/',insertOneLocalValidator,insertOneLocal);
/* @MassinS
    ! modified
        * made code_local modifiable as well

    ? remove after reading

    --written by @lyesrabhi16
*/
LocalRouter.put('/:code_local',putOneLocalValidator,putOneLocal);
LocalRouter.delete('/:code_local',deleteOneLocal);

export default LocalRouter;