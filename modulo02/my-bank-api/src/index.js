const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3000;
const accountsRouter = require("./accounts");

global.fileName = "accounts.json";

app.use(express.json());
app.use("/account", accountsRouter);

app.listen(port, async () => {
  try {
    await fs.readFile(global.fileName, "utf8");
    console.log("Tudo OK! DEV");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch((err) => {
      console.log(err);
    });
  }
});
