import { Router } from "express";
import { selectAllEnsetCreneaux,
         selectAllEnsetCreneauxById,
         insertOneEnsEtCreneaux,
         putOneEnsEtCreneaux,
         deleteOneEnsEtCreneaux
} from "../controllers/EnsEtCreneauxController.js";
import { insertOneEnsEtCreneauValidator, putOneEnsEtCreneauValidator } from "../validators/EnsEtCreneauxValidators.js";

const EnsEtCreneauxRouter=Router();

EnsEtCreneauxRouter.get('/',selectAllEnsetCreneaux);
EnsEtCreneauxRouter.get('/:matricule',selectAllEnsetCreneauxById);
/* @MassinS
    ! modified
    * added a validator
    ? remove after reading
    --written by @lyesrabhi16
*/
EnsEtCreneauxRouter.post('/', insertOneEnsEtCreneauValidator,insertOneEnsEtCreneaux);
/* @MassinS
    ! modified
    * added a validator
    ? remove after reading
    --written by @lyesrabhi16
*/
EnsEtCreneauxRouter.put('/:matricule/creneaux/:id_creneau', putOneEnsEtCreneauValidator,putOneEnsEtCreneaux);
EnsEtCreneauxRouter.delete('/:matricule/creneaux/:id_creneau',deleteOneEnsEtCreneaux);


export default EnsEtCreneauxRouter;