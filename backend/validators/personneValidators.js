import { TypePersonne } from "../../constants.js";

export const addPersonneValidator = (req, res, next) => {
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

  //? check for presonne required fields
  const missingFields = [];
  if (nom === undefined) {
    missingFields.push("nom");
  }
  if (prenom === undefined) {
    missingFields.push("prenom");
  }
  if (email === undefined) {
    missingFields.push("email");
  }
  if (password === undefined) {
    missingFields.push("password");
  }
  if (type === undefined) {
    missingFields.push("type");
  }

  if (missingFields.length > 0) {
    res.status(400).json({
      status: "error",
      message:
        "missing required fields: " +
        missingFields
    });
    return;
  }

  //? check type 
    if (
        type !== TypePersonne.Etudiant &&
        type !== TypePersonne.Enseignant &&
        type !== TypePersonne.Administrateur
    ) {
        res.status(400).json({
        status: "error",
        message: `invalid value for type: ${type}`,
        });
        return;
    }
  //? check for personne type and validate fields based on type TypePersonne(Etudiant, Enseignant, Administrateur)
  if (type === TypePersonne.Etudiant) {
    if (
      anneeBac === undefined ||
      niveau === undefined ||
      id_groupe === undefined ||
      code_specialite === undefined
    ) {
      res.status(400).json({
        status: "error",
        message: `missing required fields for type ${TypePersonne.Etudiant}: anneeBac, niveau, id_groupe, code_specialite`,
      });
      return;
    }
  } else if (type === TypePersonne.Enseignant) {
    if (charges === undefined) {
      res.status(400).json({
        status: "error",
        message: `missing required fields for type ${TypePersonne.Enseignant}: charges `,
      });
      return;
    }
    // sourcery skip: merge-nested-ifs
  } else if (type === TypePersonne.Administrateur) {
    if (role === undefined) {
      res.status(400).json({
        status: "error",
        message: `missing required fields for type ${TypePersonne.Administrateur} : role`,
      });
      return;
    }
  }

  next();
};
