import {Router } from "express";

import { getAllModule,
         putOneModule,
         insertOneModule,
         deleteOneModule,

} from "../controllers/ModuleController.js";



const moduleRouter = Router();


moduleRouter.get('/',getAllModule);
moduleRouter.post('/',insertOneModule);
moduleRouter.put('/:code_module',putOneModule);
moduleRouter.delete('/:code_module',deleteOneModule);


export default moduleRouter;