const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
  let account = req.body;
  // console.log("post account");
  fs.readFile(global.fileName, "utf8", (err, data) => {
    // console.log(err);
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
    if (!err) {
      let json = JSON.parse(data);
      delete json.nextId;
      res.send(json);
    } else {
      res.status(400).send({
        error: err.message,
      });
    }
  });
});

module.exports = router;
