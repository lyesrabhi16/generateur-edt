import { TypePersonne } from "../../constants";

export const typePersonneValidator = (type) => {
    return type in TypePersonne;
};