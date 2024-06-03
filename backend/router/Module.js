import {Router } from "express";

import { getAllModule,
         putOneModule,
         insertOneModule,
         deleteOneModule,
         getOneModule,

} from "../controllers/ModuleController.js";
import { insertModuleValidator, putOneModuleValidator } from "../validators/moduleValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";



const moduleRouter = Router();


moduleRouter.get('/',getAllModule);


moduleRouter.get("/:code_module", getOneModule);

moduleRouter.post('/', isAdmin, insertModuleValidator, insertOneModule);
moduleRouter.put('/:code_module', isAdmin, putOneModuleValidator,putOneModule);
moduleRouter.delete('/:code_module', isAdmin,deleteOneModule);


export default moduleRouter;