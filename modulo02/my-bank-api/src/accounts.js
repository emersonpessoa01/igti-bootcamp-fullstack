const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.post("/", async (req, res) => {
  let account = req.body;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    account = {
      id: json.nextId++,
      ...account,
    };
    json.accounts.push(account);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send("Inclusão confirmada");
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.get("/", async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.get("/:id/", async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    delete json.nextId;
    const account = json.accounts.find((account) => {
      return account.id === parseInt(req.params.id, 10);
    });
    // res.send(json);
    res.send(account);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    delete json.nextId;
    let account = json.accounts.filter((account) => {
      return account.id !== parseInt(req.params.id, 10);
    });
    json.accounts = account;
    res.send(account);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send("Exclusão confirmada");

  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.put("/", (req, res) => {
  let newAccount = req.body;

  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (err) throw err;

      let json = JSON.parse(data);
      let oldIndex = json.accounts.findIndex(
        (account) => account.id === newAccount.id
      );
      // res.send(oldIndex);
      json.accounts[oldIndex] = newAccount;
      // json.accounts[oldIndex].name = newAccount.name;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({
            error: err.message,
          });
        } else {
          res.send("Atualização confirmada");
          // res.end();
        }
      });
    } catch (err) {
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

router.post("/transaction", (req, res) => {
  let params = req.body;

  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (err) throw err;

      let json = JSON.parse(data);
      let index = json.accounts.findIndex(
        (account) => account.id === params.id
      );

      if (params.value < 0 && json.accounts[index].balance + params.value < 0) {
        throw new Error("Não há saldo suficiente");
      }
      // res.send(index);
      json.accounts[index].balance += params.value;
      // json.accounts[index].age += params.value;
      // json.accounts[index].altura = params.value;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({
            error: err.message,
          });
        } else {
          res.send(json.accounts[index]);
          // res.end();
        }
      });
    } catch (err) {
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

module.exports = router;
