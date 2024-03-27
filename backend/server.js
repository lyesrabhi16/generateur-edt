import  Express  from "express";
import dotEnv from "dotenv";
import cors from "cors";
import DB from "./DB/DB.js";
import morgan from "morgan";

import PersonneRouter from "./router/Personne.js";
import SpecialiteRouter from "./router/Specialite.js";
import SectionRouter from './router/Section.js';
import GroupeRouter from './router/Groupe.js';
import OccupationRouter from "./router/Occupation.js";
import moduleRouter from "./router/Module.js";
import LocalRouter from "./router/Local.js";
import SeanceRouter from "./router/Seance.js";
dotEnv.config();

const app = new Express();
const port = process.env.ServerPort || 2999;

export const db = DB();
app.use(morgan('dev'))
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("AGEMP Server");// for testing purposes
});

app.use("/personne", PersonneRouter);
app.use("/specialite", SpecialiteRouter);
app.use("/section", SectionRouter);
app.use('/occupation',OccupationRouter);
app.use("/groupe", GroupeRouter);
app.use("/module", moduleRouter );
app.use("/Local",LocalRouter);
app.use("/Seance",SeanceRouter);


app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

db.connect()
      .then(()=>console.log("Database connected: "+db.$cn.database))
      .catch((err)=>console.log("Error connecting to the database:", err));


