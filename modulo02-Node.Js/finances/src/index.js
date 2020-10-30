/**
 * const express = require('express')
 * const {writeFile} = require('fs').promises
 */

import express from "express";
import { promises } from "fs";
import lancamentosRouter from "./lancamentos.js"

const { writeFile } = promises;
const port = 3000;
const app = express();

app.use(express.json());
app.use("/lancamentos/receita", lancamentosRouter)

app.listen(port, async () => {
try {
    const initialJson = {
      nextId: 1,
      lancamentos: [],
    };
    //criando arquivo json a partir da constante initialJson
    //passando a flag "wx". Executa só se existir writeFile
    await writeFile("lancamentos.json", JSON.stringify(initialJson));
  
} catch (err) {
  console.log(err)
}
  console.log("Fala Dev");
});
  