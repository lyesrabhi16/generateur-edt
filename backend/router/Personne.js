import { Router } from "express";
import { db } from "../server.js";

const personneRouter = Router();
personneRouter.get("/", (req, res) => {
  db.query("SELECT * FROM personne")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default personneRouter;
