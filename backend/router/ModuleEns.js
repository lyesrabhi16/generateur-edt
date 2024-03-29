import { Router } from "express";

import { selectAllModuleEns,
         selectAllModuleEnsById,
         putOneModuleEns,
         insertOneModuleEns,
         deleteOneModuleEns
         } from "../controllers/ModuleEnsController.js";

const ModuleEnsRouter = Router();

ModuleEnsRouter.get('/',selectAllModuleEns);
ModuleEnsRouter.get('/:matricule',selectAllModuleEnsById);
ModuleEnsRouter.put('/:matricule/modules/:code_module',putOneModuleEns);
ModuleEnsRouter.post('/',insertOneModuleEns);
ModuleEnsRouter.delete('/:matricule/modules/:code_module',deleteOneModuleEns);

export default ModuleEnsRouter;
