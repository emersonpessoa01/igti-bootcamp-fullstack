/**
 * const express = require('express')
 * const {writeFile} = require('fs').promises
 */

import express from "express";
import { promises } from "fs";
import lancamentosRouter from "./lancamentos.js"
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from "./docs.js"

const { writeFile } = promises;
const app = express();

global.fileName = "lancamentos.json"

app.use(express.json());
app.use("/lancamentos", lancamentosRouter)
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3015, async () => {
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
 
