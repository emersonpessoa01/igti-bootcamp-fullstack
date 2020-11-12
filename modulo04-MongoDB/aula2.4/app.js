import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";
//Conexao com o MongoDB
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/grades?retryWrites=true&w=majority",
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
const port = 3016;

app.listen(port, () => {
  console.log("Fala Dev -- API STARTED");
});
