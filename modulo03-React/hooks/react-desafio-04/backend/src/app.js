import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { promisify } from 'util';
import winston from 'winston';
import gradesRouter from './routes/grades.js';
import { postGrade } from './routes/grades.js';

const app = express();
app.use(cors());
const exists = promisify(fs.exists);
const writeFile = promisify(fs.writeFile);
const deleteFile = promisify(fs.unlink);


global.fileName = 'grades.json';

app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static('public'));
app.use('/grade', gradesRouter);

/**
 * Função para simular algumas
 * notas e já ter algo pronto
 * na API
 */
const simulateGrades=()=>{
  const students = ['John Petrucci', 'Mike Portnoy', 'Neal Morse'];
  const subjects = ['01 - JavaScript', '02 - Node', '03 - React'];
  const types = ['Exercícios', 'Trabalho Prático', 'Desafio'];
  const maxGrades = [10, 40, 50];

  const grades = [];

  students.forEach((student) => {
    types.forEach((type, index) => {
      subjects.forEach((subject) => {
        const value = Math.ceil(Math.random() * maxGrades[index]);

        const grade = {
          student,
          subject,
          type,
          value,
        };

        grades.push(grade);
      });
    });
  });

  const postAllGrades = async () => {
    for (let i = 0; i < grades.length; i++) {
      await postGrade(grades[i]);
    }
  };

  postAllGrades();
}

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

const now = new Date()
const timer = `${leftPad(now.getDate())}/${leftPad(now.getMonth() + 1)}/${leftPad(now.getFullYear())}`;
const hours = leftPad(now.getHours());
const minutes = leftPad(now.getMinutes());
const seconds = leftPad(now.getSeconds());

const formatter = `${hours}:${minutes}:${seconds}`;
const tt = formatter.split(":");
const sec = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
const display = `${timer} ${formatter}`

const { combine, timestamp, label, printf } = winston.format;


const myFormat = printf(({ timestamp, label, level, message }) => {
  return `${display} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  //local para onde serão transportados
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "grades-control-api.log" })
  ],
  //impressão dos logs
  format: combine(
    label({ label: "grades-control-api" }),
    timestamp(display),
    myFormat
  )

});

app.listen(process.env.PORT || 3001, async () => {
  /**
   * Reiniciando o arquivo com os dados
   * simulados. Comente a linha abaixo
   * se quiser preservar os dados
   */
  await deleteFile(global.fileName);

  try {
    const fileExists = await exists(global.fileName);
    if (!fileExists) {
      const initialJson = {
        nextId: 1,
        grades: [],
      };
      await writeFile(global.fileName, JSON.stringify(initialJson));

      simulateGrades();
    }
  } catch (err) {
    logger.error(err);
  }
  logger.info('API started!');
});
