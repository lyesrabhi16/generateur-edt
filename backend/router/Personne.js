import { Router } from "express";
import { addPersonneValidator } from "../validators/personneValidators.js";
import { addPersonneWithMatricule, addPersonneWithoutMatricule, deletePersonne, getPersonne, getPersonnes, updatePersonne } from "../DB/personne.js";
import bcrypt from "bcrypt";

const personneRouter = Router();

//! must add protection for the routes

//? get all
personneRouter.get("/", (req, res) => {
  getPersonnes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//? get one
personneRouter.get("/:matricule", (req, res) => {
  getPersonne(req.params.matricule)
    .then((data) => {
      const response = {
        status: 200,
        message: "Retrieved one person",
        personne: data,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//? add one
personneRouter.post("/", addPersonneValidator, (req, res) => {
  const {
    nom,
    prenom,
    email,
    password,
    type,
    role,
    anneeBac,
    niveau,
    charges,
    id_groupe,
    code_specialite,
  } = req.body;
  const matricule = req.body.matricule || null;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const addPersonne = () =>{
    if (matricule === null) {
        return addPersonneWithoutMatricule(
          nom,
          prenom,
          email,
          hashedPassword,
          type,
          role,
          anneeBac,
          niveau,
          charges,
          id_groupe,
          code_specialite,
        )
    }
    else{
      return addPersonneWithMatricule(
        matricule,
        nom,
        prenom,
        email,
        hashedPassword,
        type,
        role,
        anneeBac,
        niveau,
        charges,
        id_groupe,
        code_specialite,
      )
    }
  }
  addPersonne()
    .then((personne) => {
      const response = {
        status: 201,
        message: "Personne added successfully",
        personne: personne,
      };
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//? delete one
personneRouter.delete("/:matricule", (req, res) => {
  deletePersonne(req.params.matricule)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: "Personne deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//? update one
personneRouter.put("/:matricule", addPersonneValidator,(req, res) => {
  const {
    nom,
    prenom,
    email,
    password,
    type,
    role,
    anneeBac,
    niveau,
    charges,
    id_groupe,
    code_specialite,
  } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  updatePersonne(
    req.params.matricule,
    nom,
    prenom,
    email,
    hashedPassword,
    type,
    role,
    anneeBac,
    niveau,
    charges,
    id_groupe,
    code_specialite
  )
    .then((personne) => {
      const response = {
        status: 200,
        message: "Personne updated successfully",
        personne: personne,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default personneRouter;
