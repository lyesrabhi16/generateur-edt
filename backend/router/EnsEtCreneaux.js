import { Router } from "express";
import { selectAllEnsetCreneaux,
         selectAllEnsetCreneauxById,
         insertOneEnsEtCreneaux,
         putOneEnsEtCreneaux,
         deleteOneEnsEtCreneaux,
         getAllCreneauWithAllInformation
} from "../controllers/EnsEtCreneauxController.js";
import { insertOneEnsEtCreneauValidator, putOneEnsEtCreneauValidator } from "../validators/EnsEtCreneauxValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";

const EnsEtCreneauxRouter=Router();

EnsEtCreneauxRouter.get('/',selectAllEnsetCreneaux);
EnsEtCreneauxRouter.get('/:matricule',selectAllEnsetCreneauxById);

EnsEtCreneauxRouter.post('/', isAdmin,insertOneEnsEtCreneauValidator,insertOneEnsEtCreneaux);

EnsEtCreneauxRouter.put('/:matricule/creneaux/:id_creneau', isAdmin,putOneEnsEtCreneauValidator,putOneEnsEtCreneaux);
EnsEtCreneauxRouter.delete('/:matricule/creneaux/:id_creneau', isAdmin,deleteOneEnsEtCreneaux);
EnsEtCreneauxRouter.get('/EmploisTempsEns/:matricule/Annee/:annee/Semestres/:semestre',getAllCreneauWithAllInformation);

export default EnsEtCreneauxRouter;