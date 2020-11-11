//interface para o controller
import express from "express";
import { studentModel} from "./models/student.js"

const app = express();

//criando o create do CRUD
app.get("/", async (req, res) => {
  // res.send({ result: "Validado" });

  try {
    const student = await studentModel.find({});

    res.send(student);
  } catch (err) {
    res.send(400).send({ result: err.message });
  }
});

export { app as studentRouter };
