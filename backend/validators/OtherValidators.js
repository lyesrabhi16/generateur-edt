import { TypeLocal, TypePersonne } from "../../constants.js";

export const typePersonneValidator = (type) => {
    return type in TypePersonne;
};

export const typeLocalValidator = (type) => {
    return type in TypeLocal;
};

export const TimeFormatValidator = (time) => {
    
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;

    return timeRegex.test(time);
};
