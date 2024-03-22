import { db } from '../server.js'


/**
 * Retrieves all sections from the database.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of section objects.
 */
export const selectSections = () => {
    return db.manyOrNone(`SELECT * FROM section`);
}

/**
 * Retrieves a section from the database based on the provided code_section.
 *
 * @param {string} code_section - The code_section of the section to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the retrieved section object.
 */
export const selectSection = (code_section) => {
    return db.oneOrNone(`SELECT * FROM section WHERE code_section = $1`, [code_section]);
}

/**
 * Inserts a new section into the database.
 * 
 * @param {string} code_section - The code of the section to be inserted.
 * @returns {Promise} - A promise that resolves to the result of the database query.
 */
export const insertSection = (code_section) => {
    return db.one(`INSERT INTO section (code_section) VALUES ($1) returning *`, [code_section]);
};


/**
 * Updates the code_section value in the section table of the database.
 *
 * @param {string} code_section_old - The old code_section value to be updated.
 * @param {string} code_section_new - The new code_section value to replace the old value.
 * @returns {Promise} - A promise that resolves when the update query is executed successfully.
 */
export const updateSection = (code_section_old, code_section_new) => {
    return db.one(`UPDATE section SET code_section = $1 WHERE code_section = $2 returning *`, [code_section_new, code_section_old]);
}

/**
 * Deletes a section from the database based on the provided code_section.
 *
 * @param {string} code_section - The code_section of the section to be deleted.
 * @returns {Promise} A promise that resolves to the result of the delete operation.
 */
export const deleteSection = (code_section) => {
    return db.none("DELETE FROM section WHERE code_section = $1", [code_section]);
}