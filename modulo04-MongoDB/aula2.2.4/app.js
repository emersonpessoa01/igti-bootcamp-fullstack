import express from 'express'
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";
import dotenv from 'dotenv';
dotenv.config();

//criando variaveis de ambiente
// process.env.USER_DB = "emersonpessoa"

//Conexao com o MongoDB
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.cginj.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDb Atlas");
  } catch (err) {
    console.log("Erro ao conectar no MongoDB");
  }
})();

const app = express();
app.use(express.json());
app.use("/student", studentRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Fala Dev -- API STARTED");
});
