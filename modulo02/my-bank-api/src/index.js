const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const accountsRouter = require("./routes/accouny.js");

app.use(express.json());



app.listen(port, () => {
  try {
    fs.readFile("accounts.json", "utf8", (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile("accounts.json", JSON.stringify(initialJson), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }

  console.log("Tudo OK! DEV");
});
