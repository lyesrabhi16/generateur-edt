import {Router } from "express";

import { getAllModule,
         putOneModule,
         insertOneModule,
         deleteOneModule,
         getOneModule,

} from "../controllers/ModuleController.js";
import { insertModuleValidator, putOneModuleValidator } from "../validators/moduleValidators.js";



const moduleRouter = Router();


moduleRouter.get('/',getAllModule);

/* @MassinS
    ! added getOneModule
    we need it if we want to get the nom_module of one module only

    ? remove after reading

    --written by @lyesrabhi16
*/
moduleRouter.get("/:code_module", getOneModule);

moduleRouter.post('/', insertModuleValidator, insertOneModule);
moduleRouter.put('/:code_module', putOneModuleValidator,putOneModule);
moduleRouter.delete('/:code_module',deleteOneModule);


export default moduleRouter;