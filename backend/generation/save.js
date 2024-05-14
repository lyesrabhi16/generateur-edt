import { createCreneau } from "../DB/Creneau.js";
import {
  createEmplois,
  deleteEmploisByIdGroupe,
} from "../DB/EmploisDuTemps.js";
import { createEnsEtCreneau } from "../DB/EnsEtCreneaux.js";

export const save = async (req, res) => {
  const { data, semestre, annee, override } = req.body;

  let saveError = false;
  // get groupes from data
  const groupes = Object.values(data).map((creneaux) => creneaux[0].groupe);
  
  const errors = [];
  // create an emp for each groupe
  for (const groupe of groupes) {
    if (override) {
      await deleteEmploisByIdGroupe(groupe.id_groupe).catch((err) =>
        console.log(err)
      );
    }

    const emp = await createEmplois(
      groupe.id_groupe,
      groupe.niveau,
      semestre,
      annee
    ).catch((err) => {
      errors.push({
        groupe: groupe,
        error: "Error While Creating Emplois Du Temps",
        details: err,
      });
      saveError = true;
    });

    if (saveError) {
      continue;
    }

    const creneaux = data[groupe.code_groupe];

    for (const creneau of creneaux) {
      const c = await createCreneau(
        creneau.debut,
        creneau.fin,
        creneau.jour,
        emp.id_emp,
        creneau.seance.id_seance,
        creneau.local.code_local
      ).catch((err) => {
        errors.push({
          groupe: groupe,
          error: "Failed to create Creneau",
          details: err,
        });
        saveError = true;
      });

      if (saveError) {
        continue;
      }

      const ens_c = await createEnsEtCreneau(
        creneau.enseignant.matricule,
        c.id_creneau
      ).catch((err) => {
        errors.push({
          groupe: groupe,
          error: "Failed to create enseignantEtCreneau",
          details: err,
        });
        saveError = true;
      });

      if (saveError) {
        continue;
      }
    }
  }

  const response = {};
  if (errors.length === 0) {
    response.success = "Saved Emplois De Temps For All groupes";
    res.status(201).json(response);
  } else {
    response.error = errors;
    res.status(500).json(response);
  }
};
