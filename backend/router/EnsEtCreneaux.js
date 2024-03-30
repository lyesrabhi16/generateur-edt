import { Router } from "express";
import { selectAllEnsetCreneaux,
         selectAllEnsetCreneauxById,
         insertOneEnsEtCreneaux,
         putOneEnsEtCreneaux,
         deleteOneEnsEtCreneaux
} from "../controllers/EnsEtCreneauxController.js";

const EnsEtCreneauxRouter=Router();

EnsEtCreneauxRouter.get('/',selectAllEnsetCreneaux);
EnsEtCreneauxRouter.get('/:matricule',selectAllEnsetCreneauxById);
EnsEtCreneauxRouter.post('/',insertOneEnsEtCreneaux);
EnsEtCreneauxRouter.put('/:matricule/creneaux/:id_creneau',putOneEnsEtCreneaux);
EnsEtCreneauxRouter.delete('/:matricule/creneaux/:id_creneau',deleteOneEnsEtCreneaux);


export default EnsEtCreneauxRouter;