//interface para o controller
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

app.post('/', async (req, res)=>{
  try {
    const student = new studentModel(req.body);
    await student.save();//para persistir na collection
    
    res.send(student);

  } catch (err) {
    res.status(400).send({ message: err.message });
    
  }
})

export { app as studentRouter };
