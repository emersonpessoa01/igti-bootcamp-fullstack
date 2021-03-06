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

//busca total do grades
router.get("/", async (_, res) => {
  try {
    let data = await readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    delete json.nextId;

    res.send(json);
    logger.info("GET / grade");
  } catch (err) {
    send.status(400).send({
      message: err.message,
    });
    logger.error(`GET /grade/ - ${err.message}`);
  }
});

//busca pelo id
router.get("/:id", async (req, res) => {
  try {
    let json = JSON.parse(await readFile(global.fileName, "utf8"));

    delete json.nextId;
    let grade = json.grades.find(
      (grade) => grade.id === parseInt(req.params.id)
    );
    if (grade) {
      res.send(grade);
      logger.info(`GET /grade/:id - ${JSON.stringify(grade)}`);
    } else {
      res.send("ID não encontrado");
      // throw new Error("ID inexistente")
    }
  } catch (err) {
    res.send(400).send({
      error: err.message,
    });
    logger.info(`GET /grade/ - ${err.message}`);
  }
});

//buscando a média pelo student e subject
router.get("/average/:subject/:type", async (req, res) => {
  // console.log(req.params.subject);
  // console.log(req.params.type);

  try {
    const json = JSON.parse(await readFile(global.fileName, "utf8"));
    const grades = json.grades.filter(
      (grade) =>
        grade.subject === req.params.subject && grade.type === req.params.type
    );

    if (!grades.length) {
      throw new Error(
        "Não foram encontrados parâmetros dos registros informados"
      );
    }

    const total = grades.reduce((acc, curr) => acc + curr.value, 0);

    const average = total / grades.length;

    const formatter = Intl.NumberFormat("pt-BR");
    const numberFormat = (number) => {
      return formatter.format(number);
    };

    res.send({ grades });

    logger.info(
      `GET/average/subject - ${JSON.stringify(
        `Média: ${numberFormat(average.toFixed(2))}`
      )}`
    );
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST/grade/averageStudentAndSubject - ${err.message}`);
  }
});

//busca do student pelo nome
router.get("/average/:student", async (req, res) => {
  // console.log(req.params.subject);
  // console.log(req.params.type);

  try {
    const json = JSON.parse(await readFile(global.fileName, "utf8"));
    const grades = json.grades.filter(
      (grade) => grade.student === req.params.student
    );

    if (!grades.length) {
      throw new Error(
        "Não foram encontrados parâmetros dos registros informados"
      );
    }

    res.send({ grades });

    logger.info(`GET/average/subject - ${JSON.stringify(grades)}`);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST/grade/averageStudentAndSubject - ${err.message}`);
  }
});

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
    res.send("Inclusão realizada com sucesso");
    logger.info(`POST /grade - ${JSON.stringify(grade)}`);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.post("/totalStudentAndSubject", async (req, res) => {
  try {
    let params = req.body;
    let json = JSON.parse(await readFile(global.fileName, "utf8"));

    const grades = json.grades.filter(
      (grade) =>
        grade.student === params.student && grade.subject === params.subject
    );

    let total = grades.reduce((acc, curr) => acc + curr.value, 0);

    // res.send(grades);
    res.send({ total }); //retorna json
    logger.info(
      `POST/grade/totalStudentAndSubject - ${JSON.stringify(`total: ${total}`)}`
    );
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST/grade/totalStudentAndSubject - ${err.message}`);
  }
});

router.post("/best", async (req, res) => {
  try {
    let json = JSON.parse(await readFile(global.fileName, "utf8"));

    let grades = json.grades.filter(
      (grade) =>
        grade.subject === req.body.subject && grade.type === req.body.type
    );

    if (!grades.length) {
      throw new Error(
        "Não foram encontrados registros para os parâmetros informados"
      );
    }

    // grades.sort((a, b) => a.value.localeCompare(b.value));

    grades.sort((a, b) => {
      if (a.value < b.value) return 1;
      if (a.value > b.value) return -1;
      else return 0;
    });

    //pegar as três primeiras melhores notas
    let threeBest = grades.slice(0, 3);

    // res.send(grades);
    res.send(threeBest);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`POST/bestGrade - ${err.message}`);
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
    // json.accounts[oldIndex] = newAccount; //acrescenta em todos mediante o id
    json.grades[oldIndex].name = newGrade.name;
    json.grades[oldIndex] = newGrade;
    //acrescenta somente na propriedade name

    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Atualização realizada com sucesso");
    logger.info(`PUT /grade/ - ${JSON.stringify(newGrade)}`);

    // res.end();
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`PUT /grade/ - ${err.message}`);

  }
});

router.delete("/:id", async (req, res) => {
  try {
    let json = JSON.parse(await readFile(global.fileName, "utf8"));

    delete json.nextId;
    let grade = json.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id, 10)
    );
    json.grades = grade;

    await writeFile(global.fileName, JSON.stringify(json));
    res.send("Exclusão realizada com sucesso");

    logger.info(`DELETE /grade/:id - ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
    logger.info(`DELETE /grade/ - ${err.message}`);
  }
});

export default router;
