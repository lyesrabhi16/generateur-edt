import { TypeLocal } from "../../constants.js";
import { typeLocalValidator } from "./OtherValidators.js";

export const addLocalValidator = (req, res, next) => {
    const { capacite, type } = req.body;

    const missingFields = [];
    const VerificationCapacite = [];

    if (!capacite) {
        missingFields.push("capacite");
    }

    if (!type) {
        missingFields.push("local");
    }

    if (missingFields.length > 0) {
        return res.status(400).json({
            status: 'error',
            message: "Attributs manquants : " + missingFields.join(', ')
        });
    }

    if (type === TypeLocal.Amphi) {
        if (capacite < 100 || capacite > 300) {
            VerificationCapacite.push("Capacite invalide pour amphi");
        }
    } else if (type === TypeLocal.SalleTD) {
        if (capacite < 20 || capacite > 80) {
            VerificationCapacite.push("Capacite invalide pour une Salle TD");
        }
    } else if (type === TypeLocal.SalleTP) {
        if (capacite < 15 || capacite > 25) {
            VerificationCapacite.push("Capacite invalide pour une salle TP");
        }
    }

    if (VerificationCapacite.length > 0) {
        return res.status(400).json({
            status: 'error',
            message: VerificationCapacite
        });
    }

    if (!typeLocalValidator(type)) {
        return res.status(400).json({
            status: 'error',
            message: 'Attribut type invalide'
        });
    }

    next();
};