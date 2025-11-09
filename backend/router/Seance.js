import {Router } from "express";
import { selectAllSeance ,
         selectOneSeanceById,
         selectAllSeanceByType,
         insertOneSeance,
         putOneSeance,
         deleteOneSeance,
         deleteOneSeanceByCodeModule


} from "../controllers/SeanceController.js";

import { addSeanceValidator, selectAllSeanceByTypeValidator } from "../validators/SeanceValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";


const SeanceRouter=Router();

SeanceRouter.get('/',selectAllSeance);
SeanceRouter.get('/:id_seance',selectOneSeanceById);


SeanceRouter.get('/types/:type', selectAllSeanceByTypeValidator,selectAllSeanceByType);
SeanceRouter.post('/', isAdmin,addSeanceValidator,insertOneSeance);
SeanceRouter.put('/:id_seance', isAdmin,addSeanceValidator,putOneSeance);
SeanceRouter.delete('/:id_seance', isAdmin,deleteOneSeance);
SeanceRouter.delete('/Modules/:code_module', isAdmin,deleteOneSeanceByCodeModule);

export default SeanceRouter;