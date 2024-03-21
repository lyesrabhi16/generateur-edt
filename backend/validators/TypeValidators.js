import { TypePersonne } from "../../constants.js";

export const typePersonneValidator = (type) => {
    return type in TypePersonne;
};