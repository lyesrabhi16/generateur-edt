import { Router } from "express";

import { selectAllModuleEns,
         selectAllModuleEnsById,
         putOneModuleEns,
         insertOneModuleEns,
         deleteOneModuleEns
         } from "../controllers/ModuleEnsController.js";
import { insertOneModuleEnsValidator, putOneModuleEnsValidator } from "../validators/moduleEnsValidators.js";

const ModuleEnsRouter = Router();

ModuleEnsRouter.get('/',selectAllModuleEns);
ModuleEnsRouter.get('/:matricule',selectAllModuleEnsById);
/* @MassinS
    ! modified
    * added a validator
    ? remove after reading
    --written by @lyesrabhi16
*/
ModuleEnsRouter.put('/:matricule/modules/:code_module', putOneModuleEnsValidator,putOneModuleEns);
/* @MassinS
    ! modified
    * added a validator
    ? remove after reading
    --written by @lyesrabhi16
*/
ModuleEnsRouter.post('/', insertOneModuleEnsValidator,insertOneModuleEns);
ModuleEnsRouter.delete('/:matricule/modules/:code_module',deleteOneModuleEns);

export default ModuleEnsRouter;
