//interface para o controller,sendo que o mesmo faz tratamento de persistenca de dados
import express from "express";
import { studentModel } from "./models/student.js";

const app = express();

//criando o create do CRUD
app.get("/", async (req, res) => {
  // res.send({ result: "Validado" });
  try {
    const student = await studentModel.find({});

    res.send(student);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save(); //para persistir dados na collection

    res.send(student);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id });

    if (!student) throw new Error("Documento não encontrado na coleção");
    res.send(`Ok Dev - Documento deletado : ${student}`);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } //retorna um novo documento
    );

    if (!student) throw new Error("Documento não encontrado");

    res.send(student);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export { app as studentRouter };
