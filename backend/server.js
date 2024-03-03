import  Express  from "express";
import dotEnv from "dotenv";

dotEnv.config();

const app = new Express();

const port = process.env.ServerPort || 2999;

app.get("/", (req, res) => {
    res.send("Hello World");// for testing purposes
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
