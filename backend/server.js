import  Express  from "express";
import dotEnv from "dotenv";
import cors from "cors";
import DB from "./DB/DB.js";

dotEnv.config();

const app = new Express();
const db = DB();
const port = process.env.ServerPort || 2999;

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("AGEMP Server");// for testing purposes
});



app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

db.connect()
      .then(()=>console.log("Database connected successfully!"))
      .catch((err)=>console.log("Error connecting to the database:", err));