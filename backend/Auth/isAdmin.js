import { TypePersonne } from "../../constants.js";
import { selectPersonne } from "../DB/personne.js";

export const isAdmin = (req, res, next) => {
  selectPersonne(req.matricule)
    .then((personne) => {
      if (personne.type === TypePersonne.Administrateur) {
        console.log(
          `admin auth ${personne.matricule} ${personne.nom} ${personne.prenom}`
        );
        next();
      } else {
        console.log(`admin auth failed ${personne.matricule} ${personne.nom} ${personne.prenom}`);
        return res.status(403).json({
          status: "Error",
          message: "unauthorized, requires admin access",
        });
      }
    })
    .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "erreur lors de la recherche de la personne",
            erreur: err,
          });
    });
};
