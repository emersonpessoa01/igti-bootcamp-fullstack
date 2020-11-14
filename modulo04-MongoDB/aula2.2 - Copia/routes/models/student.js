//responsavel por chamar o Banco de Dados
import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error("Valor negativo para a nota não permitifo ");
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const studentModel = mongoose.model("student", studentSchema, "student"); //para criar student no singular

export { studentModel };
