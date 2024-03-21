import bcrypt from "bcrypt";
import {
  insertPersonneWithMatricule,
  insertPersonneWithoutMatricule,
  selectPersonne,
  selectPersonnes,
  updatePersonne as updatePersonne_db,
  deletePersonne as deletePersonne_db,
} from "../DB/personne.js";


export const getPersonnes = (req, res) => {
  selectPersonnes()
    .then((data) => {
      const response = {
        status: 200,
        message: "Retrieved all persons",
        personnes: data,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      const response = {
        status: 500,
        message: "Error while retrieving all persons",
        error: err,
      };
      res.status(500).json(response);
    });
};

export const getPersonne = (req, res) => {
  const { matricule } = req.params;
  selectPersonne(matricule)
    .then((data) => {
      const response = {
        status: 200,
        message: "Retrieved one person",
        personne: data,
      };

      if (data === null) {
        response.status = 404;
        response.message = "Person not found";
        response.personne = null;
      }

      res.status(200).json(response);
    })
    .catch((err) => {
      const response = {
        status: 500,
        message: "Error while retrieving one person",
        error: err,
      };
      res.status(500).json(response);
    });
};

export const addPersonne = (req, res) => {
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

  const insertPersonne = () => {
    if (matricule === null) {
      return insertPersonneWithoutMatricule(
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
      );
    } else {
      return insertPersonneWithMatricule(
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
        code_specialite
      );
    }
  };
  insertPersonne()
    .then((personne) => {
      const response = {
        status: 201,
        message: "Person added successfully",
        personne: personne,
      };
      res.status(201).json(response);
    })
    .catch((err) => {
      const response = {
        status: 500,
        message: "Error while adding person",
        error: err,
      };
      res.status(500).json(response);
    });
};

export const deletePersonne = (req, res) => {
  const { matricule } = req.params;
  deletePersonne_db(matricule)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: "Person deleted successfully",
      });
    })
    .catch((err) => {
      const response = {
        status: 500,
        message: "Error while deleting person",
        error: err,
      };
      res.status(500).json(response);
    });
};

export const updatePersonne = (req, res) => {
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
  const {matricule} = req.params;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  updatePersonne_db(
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
      const response = {
        status: 500,
        message: "Error while updating personne",
        error: err,
      };
      res.status(500).json(response);
    });
};
