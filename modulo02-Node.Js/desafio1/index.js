import express from "express";
import gradesRouter from "./routes/grades.js";


const app = express();
const port = process.env.PORT || 3000;

global.fileName = "grades.json";
app.use(express.json());

//todas as requisições que chegar no /grade.
//Eu quero seja redirecioando para o gradesRouter
app.use("/grade", gradesRouter);
app.listen(port, () => {
  console.log("API stated...fala DEV!");
});
