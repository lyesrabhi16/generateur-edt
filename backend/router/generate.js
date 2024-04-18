import {Router } from "express";
import { AuthOnePersonne } from "../Auth/PersonneAuth.js";
import { generate } from "../generation/generation.js";



const generateRouter = Router();


generateRouter.get('/:id_section',generate);


export default generateRouter;