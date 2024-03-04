import  Express  from "express";
import dotEnv from "dotenv";
import path from "path";

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
