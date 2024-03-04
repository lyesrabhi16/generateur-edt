import  Express  from "express";
import dotEnv from "dotenv";
import path from "path";
import db from "./DB/db.js";

const __dir_name = path.resolve();

dotEnv.config();

const app = new Express();
const port = process.env.ServerPort || 2999;



app.use(Express.static(path.join(__dir_name, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dir_name, "/frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

// Connect to the database
console.log("Connecting to the database...");
db.connect().then(() => {
  console.log("Database connected");
}).catch((err) => {
  console.log("Error connecting to database: ", err);
});