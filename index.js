// To see how the final website should work, run "node solution.js".
// Make sure you have installed all the dependencies with "npm i".
// The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function Authentication(req, res, next) {
  console.log(req.body);
  if (req.body["password"] == "ILoveProgramming") {
    next();
  } else {
    console.log("incorrect");
    res.status(401).send("Unauthorized: Incorrect password");//send a message if incorrect message!
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", Authentication, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
