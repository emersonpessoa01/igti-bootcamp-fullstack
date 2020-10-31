import express from "express";
import { promises } from "fs";
import calc from "../calculos.js"; //cal exportado como padrao
//import {media, somatorio } "./calculos.js" --importacao sem padrao

const { readFile, writeFile } = promises;
const router = express.Router();

router.get("/totalMes/mes", (req, res) => {
  res.send({ valor: calc.somatorio([1, 2, 3]) });
});

router.post("/receita", async (req, res) => {
  let lancamento = req.body;
  try {
    let json = JSON.parse(await readFile(global.fileName, "utf8"));
    // delete json.nextId;

    lancamento = {
      id: json.nextId++,
      ...lancamento,
    };
    json.lancamentos.push(lancamento);

    await writeFile(global.fileName, JSON.stringify(json));
    res.send(lancamento);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.post("/despesa", async (req, res) => {
  let lancamento = req.body;
  try {
    let json = JSON.parse(await readFile(global.fileName, "utf8"));
    // delete json.nextId;

    lancamento = {
      id: json.nextId++,
      ...lancamento,
    };
    lancamento.valor = lancamento.valor * -1;
    json.lancamentos.push(lancamento);

    await writeFile(global.fileName, JSON.stringify(json));
    // res.end()
    // res.send("Inclusão realizado com sucesso")
    res.send(lancamento);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

const totalMes = async(mes)=>{
  const json = JSON.parse(await readFile(global.fileName, "utf8"));

  let lancamentos = json.lancamentos.filter(lancamento=>{
    return lancamento.data === mes;
  })
}

export default router;
//module.exports = router;
