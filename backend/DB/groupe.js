import { db } from "../server.js";

export const selectGroupes = () => {
    return db.manyOrNone("SELECT * FROM groupe");
};

export const selectGroupe = (id_groupe) => {
    return db.oneOrNone("SELECT * FROM groupe WHERE id_groupe = $1", [id_groupe]);
};

export const insertGroupe = (code_groupe, code_section) => {
    return db.one("INSERT INTO groupe (code_groupe, code_section) VALUES ($1, $2) returning *", [code_groupe, code_section]);
};

export const updateGroupe = (id_groupe, code_groupe, code_section) => {
    return db.one("UPDATE groupe SET code_groupe = $1, code_section = $2 WHERE id_groupe = $3 returning *", [code_groupe, code_section, id_groupe]);
};

export const deleteGroupe = (id_groupe) => {
    return db.none("DELETE FROM groupe WHERE id_groupe = $1", [id_groupe]);
};

