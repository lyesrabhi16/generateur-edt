import { db } from "../server.js";

export const getPersonnes = () => {
  return db.query("SELECT * FROM personne");
};
export const getPersonne = (matricule) => {
  return db.oneOrNone("SELECT * FROM personne WHERE matricule = $1", [matricule]);
};

export const addPersonneWithMatricule = (
  matricule,
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
  code_specialite
) => {
  return db.one(
    `INSERT INTO personne(matricule, nom, prenom, email, password, type, role, anneeBac, niveau, charges, id_groupe, code_specialite)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
    [
      matricule,
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
    ]
  );
};

export const addPersonneWithoutMatricule = (
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
  code_specialite
) => {
  return db.one(
    `INSERT INTO personne(nom, prenom, email, password, type, role, anneeBac, niveau, charges, id_groupe, code_specialite)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
    [
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
    ]
  );
};

export const deletePersonne = (matricule) => {
  return db.none("DELETE FROM personne WHERE matricule = $1", [matricule]);
};

export const updatePersonne = (
  matricule,
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
  code_specialite
) => {
  return db.one(
    `UPDATE personne 
     SET nom=$1, prenom=$2, email=$3, password=$4, type=$5, role=$6, 
         anneeBac=$7, niveau=$8, charges=$9, id_groupe=$10, 
         code_specialite=$11
    where matricule=$12 RETURNING *`,
    [
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
      matricule,
    ]
  );
};
