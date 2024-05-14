import {Router } from "express";
import { generate } from "../generation/generation.js";
import { save } from "../generation/save.js";
import { saveValidator } from "../validators/generateValidator.js";



const generateRouter = Router();


generateRouter.get('/:id_section',generate);
generateRouter.post('/save', saveValidator, save);

export default generateRouter;