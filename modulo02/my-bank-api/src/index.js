const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3000;
const accountsRouter = require("./accounts");
const winston = require("winston");

global.fileName = "accounts.json";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ timestamp, label, level ,message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.winston = winston.createlogger({
  level: "silly",

  //local para onde serão transportados
  transports: [
    new winston.transports.Console(),
    new winston.transports.File(),
    {
      filename: my - banck - app.log,
    },
  ],
  //impressão dos logs
  format: combine(winston.format),
});

app.use(express.json());
app.use("/account", accountsRouter);

app.listen(port, async () => {
  try {
    await fs.readFile(global.fileName, "utf8");
    logger.info("API started! DEV");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch((err) => {
      logger.error(err);
    });
  }
});
