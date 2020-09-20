const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/account", (req, res) => {
  let account = req.body;
  // console.log("post account");
  fs.readFile("accounts.json", "utf8", (err, data) => {
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

        fs.writeFile("accounts.json", JSON.stringify(json), (err) => {
          if (err) {
            console.log(err);
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

app.listen(port, () => {
  try {
    fs.readFile("accounts.json", "utf8", (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile("accounts.json", JSON.stringify(initialJson), (err) => {
          console.log(err);
        });
      }
    });
  } catch (err) {
    console.log(err);
  }

  console.log("Tudo OK! DEV");
});
