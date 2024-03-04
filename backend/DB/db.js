import pgPromise from "pg-promise";
import dotEnv from "dotenv";

dotEnv.config();

const pgp = pgPromise();

// ssl is required
// add it with ?ssl=true to the end of the DB_URL string 
// if it is not already there 
const db = pgp(process.env.DB_URL);

export default db;