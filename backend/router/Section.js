import { Router } from "express";
import { addSection, deleteSection, getSection, getSections, updateSection } from "../controllers/sectionController.js";
import { addSectionValidator } from "../validators/sectionValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";

const router = Router();

//! must add protection for the routes

//? get all
router.get("/", getSections);

//? get one
router.get("/:id_section", getSection);

//? add one
router.post("/", isAdmin, addSectionValidator, addSection);

//? update one
router.put("/:id_section", isAdmin, addSectionValidator, updateSection);

//? delete one
router.delete("/:id_section", isAdmin, deleteSection);

export default router;
