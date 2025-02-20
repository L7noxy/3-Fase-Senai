require ("dotenv").config(); //carrega as vaiaveis colocadas no arquivo .env

const port = process.env.PORT;

const express = require("express");
const app = express();

app.listen(port);

console.log("Backend rodando")