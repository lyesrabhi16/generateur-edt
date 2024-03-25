import  Express  from "express";
import dotEnv from "dotenv";
import cors from "cors";
import DB from "./DB/DB.js";
import PersonneRouter from "./router/Personne.js";
import SpecialiteRouter from "./router/Specialite.js";
import SectionRouter from './router/Section.js';
import OccupationRouter from "./router/Occupation.js";

dotEnv.config();

const app = new Express();
const port = process.env.ServerPort || 2999;

export const db = DB();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("AGEMP Server");// for testing purposes
});

app.use("/personne", PersonneRouter);
app.use("/specialite", SpecialiteRouter);
app.use("/section", SectionRouter);
app.use('/Occupation',OccupationRouter);

app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

db.connect()
      .then(()=>console.log("Database connected: "+db.$cn.database))
      .catch((err)=>console.log("Error connecting to the database:", err));


