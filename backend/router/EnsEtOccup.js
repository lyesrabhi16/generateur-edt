import { Router } from "express";

import { selectAllEnsetOccup,
         selectAllEnsetOccupById,
         insertOneEnsetOccup,
         putOneEnsEtOccup,
         deleteOneEnsEtOccup,

} from "../controllers/EnsEtOccupController.js";

const EnsEtOccupRouter=Router();

EnsEtOccupRouter.get('/',selectAllEnsetOccup);
EnsEtOccupRouter.get('/:matricule',selectAllEnsetOccupById);
EnsEtOccupRouter.post('/',insertOneEnsetOccup);
EnsEtOccupRouter.put('/:matricule',putOneEnsEtOccup);
EnsEtOccupRouter.delete('/:matricule/Occupations/:id_occup',deleteOneEnsEtOccup);

export default EnsEtOccupRouter;