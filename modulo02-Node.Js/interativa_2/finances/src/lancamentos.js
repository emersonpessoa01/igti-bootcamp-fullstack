import express from "express";
import { promises } from "fs";

const { readFile, writeFile } = promises;
const router = express.Router();

router.post("/receita", async (req, res) => {
  let lancamento = req.body;
  try {
    let json = JSON.parse(await readFile("lancamentos.json"));
    // delete json.nextId;

    lancamento = { 
      id: json.nextId++, 
      ...lancamento };
    json.lancamentos.push(lancamento);

    await writeFile("lancamentos.json", JSON.stringify(json));
    res.send(lancamento)
  } catch (err) {
    res.status(400).send({
      error: err.message
    })
  }
});

router.post("/despesa", async (req, res) => {
  let lancamento = req.body;
  try {
    let json = JSON.parse(await readFile("lancamentos.json"));
    // delete json.nextId;

    lancamento = { 
      id: json.nextId++, 
      ...lancamento };
    lancamento.valor = lancamento.valor * -1
    json.lancamentos.push(lancamento);

    await writeFile("lancamentos.json", JSON.stringify(json));
    // res.end()
    // res.send("Inclusão realizado com sucesso")
    res.send(lancamento)
  } catch (err) {
    res.status(400).send({
      error: err.message
    })
  }
});

export default router;
//module.exports = router;
