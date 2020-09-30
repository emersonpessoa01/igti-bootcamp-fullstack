import express from 'express';
import { promises } from 'fs';

const router = express.Router();
const readFile = promises.readFile
const writeFile = promises.writeFile


router.post("/", async (req, res) => {
  let account = req.body;
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    account = {
      id: json.nextId++,
      ...account,
    };
    json.accounts.push(account);

    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Inclusão confirmada");
    logger.info(`POST /account - ${JSON.stringify(account)}`);

  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST /account - ${err.message}`);

  }
});

router.get("/", async (_, res) => {
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
    logger.info("GET /account");

  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`GET /account - ${err.message}`);

  }
});

router.get("/:id/", async (req, res) => {
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    delete json.nextId;
    const account = json.accounts.find((account) => {
      return account.id === parseInt(req.params.id, 10);
    });
    // res.send(json);
    res.send(account);
    logger.info(`GET /account/:id - ${JSON.stringify(account)}`);

  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`GET /account/:id - ${err.message}`);

  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    delete json.nextId;
    let account = json.accounts.filter((account) => {
      return account.id !== parseInt(req.params.id, 10);
    });
    json.accounts = account;
    // res.send(account);


    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Exclusão confirmada");
    logger.info(`DELETE /account/:id - ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`DELETE /account/ - ${err.message}`);

  }
});

router.put("/", async (req, res) => {
  try {
    let newAccount = req.body;
    let data = await readFile(global.fileName, "utf8");

    let json = JSON.parse(data);
    let oldIndex = json.accounts.findIndex(
      (account) => account.id === newAccount.id
    );
    // res.send(oldIndex);
    json.accounts[oldIndex] = newAccount; //acrescenta em todos mediante o id
    // json.accounts[oldIndex].name = newAccount.name;
    //acrescenta somente na propriedade name

    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Atualização confirmada");
    logger.info(`PUT /account/ - ${JSON.stringify(newAccount)}`);

    // res.end();
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`PUT /account/ - ${err.message}`);

  }
});

router.post("/transaction", async (req, res) => {
  try {
    let params = req.body;
    let data = await readFile(global.fileName, "utf8");

    let json = JSON.parse(data);
    let index = json.accounts.findIndex((account) => account.id === params.id);

    if (params.value < 0 && json.accounts[index].balance + params.value < 0) {
      throw new Error("Não há saldo suficiente");
    }
    // res.send(index);
    json.accounts[index].balance += params.value; //altera o balance
    // json.accounts[index].age += params.value; //altera o age
    // json.accounts[index].altura = params.value; //altera altura
    //importante identificar o id para alteração

    await writeFile(global.fileName, JSON.stringify(json));
    res.send(json.accounts[index]);
    logger.info(`POST /account/transaction - ${JSON.stringify(params)}`);

    // res.end();
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST /account/transactio - ${err.message}`);

  }
});

// module.exports = router;
export default router;