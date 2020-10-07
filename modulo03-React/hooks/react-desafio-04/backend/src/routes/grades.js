import express from "express";
import fs from "fs";
import { promisify } from "util";

//para ajustar a hora da máquina local
const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count || stringValue.length % 10 === 0) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};

const now = new Date();
const timer = `${leftPad(now.getDate())}/${leftPad(
  now.getMonth() + 1
)}/${leftPad(now.getFullYear())}`;
const hours = leftPad(now.getHours());
const minutes = leftPad(now.getMinutes());
const seconds = leftPad(now.getSeconds());

const formatter = `${hours}:${minutes}:${seconds}`;
const tt = formatter.split(":");
const sec = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
const display = `${timer} ${formatter}`;

const router = express.Router();
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const postGrade = async (gradeToPost) => {
  let data = JSON.parse(await readFile(global.fileName, "utf8"));
  let grade = Object.assign({}, gradeToPost);
  grade = {
    id: data.nextId++,
    ...grade,
    timestamp: display,
  };

  data.grades.push(grade);
  await writeFile(global.fileName, JSON.stringify(data));
  logger.info(`POST /grade - ${JSON.stringify(grade)}`);

  return grade;
};

router.post("/", async (req, res) => {
  try {
    const grade = await postGrade(req.body);
    res.send({
      id: grade.id,
    });

    res.end();
    logger.info(`POST /grade - ${JSON.stringify(grade)}`);
  } catch (err) {
    console.log(err.message);

    res.status(400).send({
      error: err.message,
    });
  }
});

router.get("/", async (_, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName, "utf8"));
    delete data.nextId;

    res.send(data);

    logger.info("GET /grade");
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName, "utf8"));
    const grade = data.grades.find(
      (grade) => grade.id === parseInt(req.params.id, 10)
    );
    if (grade) {
      res.send(grade);
    } else {
      res.end();
    }
    logger.info(`GET /grade - " ${req.params.id}`);

  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName, "utf8"));

    data.grades = data.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id, 10)
    );
    await writeFile(global.fileName, JSON.stringify(data));

    res.send(true);

    logger.info(`DELETE /grade - " ${req.params.id}`);
  } catch (err) {
    res.status(400).send({ 
      error: err.message 
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const newGrade = req.body;
    const data = JSON.parse(await readFile(global.fileName, "utf8"));
    let oldGradeIndex = data.grades.findIndex(
      (grade) => grade.id === newGrade.id
    );
    // newGrade.timestamp = new Date();
    newGrade.timestamp = display;
    data.grades[oldGradeIndex] = newGrade;
    await writeFile(global.fileName, JSON.stringify(data));

    res.end();

    logger.info(`PUT /grade - " ${JSON.stringify(newGrade)}`);
  } catch (err) {
    console.log(err);
    res.status(400).send({ 
      error: err.message 
    });
  }
});

export default router;
export { postGrade };
