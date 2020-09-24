const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3000;
const accountsRouter = require("./accounts");

global.fileName = "accounts.json";

app.use(express.json());
app.use("/account", accountsRouter);

app.listen(port, () => {
  try {
    // fs.readFile(global.fileName, "utf8", (err, data) => {
    //   if (err) {
    //     const initialJson = {
    //       nextId: 1,
    //       accounts: [],
    //     };
    //     fs.writeFile(global.fileName, JSON.stringify(initialJson), (err) => {
    //       if (err) {
    //         console.log(err);
    //       }
    //     });
    //   }
    // });
    fs.readFile(global.fileName, "utf8")
      .catch(() => {
        const initialJson = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch(
          (err) => {
            console.log(err);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }

  console.log("Tudo OK! DEV");
});
