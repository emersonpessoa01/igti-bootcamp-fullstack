const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
  let account = req.body;
  // console.log("post account");
  fs.readFile(global.fileName, "utf8", (err, data) => {
    // console.log(err);
    //if(err) throw err; inseri antes do try
    if (!err) {
      try {
        let json = JSON.parse(data);
        // console.log(json);
        account = {
          id: json.nextId++,
          ...account,
        };
        json.accounts.push(account);

        fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
          if (err) {
            // console.log(err);
            res.status(400).send({
              error: err.message,
            });
          } else {
            // res.end();
            res.send("Tudo OK! DEV");
          }
        });
      } catch (err) {
        res.status(400).send({
          error: err.message,
        });
      }
    } else {
      // console.log("erro na leitura");
      // res.send("erro na leitura");
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

router.get("/", (_, res) => {
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (!err) {
        let json = JSON.parse(data);
        delete json.nextId;
        res.send(json);
      } else {
        res.status(400).send({
          error: err.message,
        });
      }
    } catch (err) {
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

router.get("/:id/", (req, res) => {
  // res.send('Tudo OK! DEV');
  // req.params.id;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      // throw new Error('teste de erro')
      if (!err) {
        let json = JSON.parse(data);
        delete json.nextId;
        const account = json.accounts.find((account) => {
          return account.id === parseInt(req.params.id);
        });
        // res.send(json);
        res.send(account);
      } else {
        res.status(400).send({
          error: err.message,
        });
      }
    } catch (err) {
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

module.exports = router;
