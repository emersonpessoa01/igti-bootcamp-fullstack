/**
 * const express = require('express')
 * const {writeFile} = require('fs').promises
 */

import express from "express";
import { promises } from "fs";

const { writeFile } = promises;
const port = 3000;
const app = express();
app.use(express.json());

app.listen(port, async () => {
try {
    const initialJson = {
      nextId: 1,
      lancamentos: [],
    };
    //criando arquivo json a partir da constante initialJson
    //passando a flag "wx". Executa só se existir
    await writeFile("lancamentos.json", JSON.stringify(initialJson));
  
} catch (err) {
  console.log(err)
}
  console.log("Fala Dev");
});
