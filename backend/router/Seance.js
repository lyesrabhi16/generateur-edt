import {Router } from "express";
import { selectAllSeance ,
         selectOneSeanceById,
         selectAllSeanceByType,
         insertOneSeance,
         putOneSeance,
         deleteOneSeance


} from "../controllers/SeanceController.js";

import { addSeanceValidator } from "../validators/SeanceValidators.js";


const SeanceRouter=Router();

SeanceRouter.get('/',selectAllSeance);
SeanceRouter.get('/:id_seance',selectOneSeanceById);
SeanceRouter.get('/types/:type',selectAllSeanceByType);
SeanceRouter.post('/',addSeanceValidator,insertOneSeance);
SeanceRouter.put('/:id_seance',addSeanceValidator,putOneSeance);
SeanceRouter.delete('/:id_seance',deleteOneSeance);

export default SeanceRouter;