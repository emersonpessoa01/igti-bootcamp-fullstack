import moment from "moment";
import express from "express";
import { promises } from "fs";
import calc from "../calculos.js"; //cal exportado como padrao
//import {media, somatorio } "./calculos.js" --importacao sem padrao

const { readFile, writeFile } = promises;
const router = express.Router();

const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count || stringValue.length % 10 === 0) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};

const now = new Date();
const timer = `${leftPad(now.getDate())}/${leftPad(
  now.getMonth() + 1
)}/${leftPad(now.getFullYear())}`;
const hours = leftPad(now.getHours());
const minutes = leftPad(now.getMinutes());
const seconds = leftPad(now.getSeconds());
const formatted = `${hours}:${minutes}:${seconds}`;
const data = `${timer} - ${formatted}`;


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
      ...lancamento,data
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
      ...lancamento,data
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

// const totalMes = async (mes) => {
//   const json = JSON.parse(await readFile(global.fileName, "utf8"));
//   let lancamentos = json.lancamentos.filter((lancamento) => {
//     let m = moment(lancamento.data, "DD/MM/YYYY").month() + 1 === mes;
//     return m === mes;
//   });
//   lancamentos = lancamentos.map((lancamento) => {
//     return lancamento.valor;
//   });

//   return {total: calc.somatorio(lancamentos)}
// };
// totalMes();

const dataCompleta = async () => {

  router.get("/dataCompleta", async (req, res) => {
    const json = JSON.parse(await readFile(global.fileName, "utf8"));

    let lancamento = req.body;

    lancamento = {
      id: json.nextId++,
      ...lancamento,
      display,
    };
    json.lancamentos.push(lancamento);

    await writeFile(global.fileName, JSON.stringify(json));
    res.send(lancamento);
  });
};
dataCompleta();

export default router;
//module.exports = router;
