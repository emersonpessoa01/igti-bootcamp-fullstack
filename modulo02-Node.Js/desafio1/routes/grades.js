import express from "express";
import { promises } from "fs";

const router = express.Router();
const readFile = promises.readFile;
const writeFile = promises.writeFile;

//para converter o timestamp para horário da máquina local
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

router.post("/", async (req, res) => {
  let grade = req.body;
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    grade = {
      id: json.nextId++,
      ...grade,
      timestamp: display,
    };
    json.grades.push(grade);

    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Inclusão confirmada");
    logger.info(`POST /grade - ${JSON.stringify(grade)}`);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.put("/", async (req, res) => {
  try {
    let newGrade = req.body;
    let data = await readFile(global.fileName, "utf8");

    let json = JSON.parse(data);
    let oldIndex = json.grades.findIndex(
      (grade) => grade.id === newGrade.id
    );
    // res.send(oldIndex);
    json.grades[oldIndex] = newGrade; //acrescenta em todos mediante o id
    // json.accounts[oldIndex].name = newAccount.name;
    //acrescenta somente na propriedade name

    // if(oldIndex === -1){
    //   throw new Error('ID inexistente')
    // }

    // if(newGrade.student){
    //   json.grades[oldIndex].student = newGrade.student; 
    // }

    // console.log(newGrade.student)
    // console.log(oldIndex)
    

    await writeFile(global.fileName, JSON.stringify(json));
    // res.send("Atualização confirmada");
    res.send(json.grades[oldIndex]);
    logger.info(`PUT /grade/ - ${JSON.stringify(newGrade)}`);

    // res.end();
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`PUT /grade/ - ${err.message}`);

  }
});


export default router;
