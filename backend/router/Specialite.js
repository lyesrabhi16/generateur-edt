import { Router } from "express";
import {
  addSpecialite,
  deleteSpecialite,
  getSpecialite,
  getSpecialites,
  updateSpecialite,
} from "../controllers/specialiteController.js";
import {
  addSpecialiteValidator,
  updateSpecialiteValidator,
} from "../validators/specialiteValidators.js";
import { isAdmin } from "../Auth/isAdmin.js";

const router = Router();

//! must add protection for the routes

//? get all
router.get("/", getSpecialites);

//? get one
router.get("/:code_specialite", getSpecialite);

//? add one
router.post("/", isAdmin, addSpecialiteValidator, addSpecialite);

//? update one
router.put("/:code_specialite", isAdmin, updateSpecialiteValidator, updateSpecialite);

//? delete one
router.delete("/:code_specialite", isAdmin, deleteSpecialite);

export default router;
