import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/api?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(
//   console.log("Conectado ao MongoDB Atlas")
// ).catch((err) => {
//   console.log(`Erro ao conectar no Mongo DB Atlas ${err}`)
// })

// conectar ao MongoDB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/grades?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDb Atlas")
  } catch (err) {
    console.log("Erro ao conectar no MongoDB");
  }
})();

//criacao do modelo
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
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

//definindo modelo da collection
mongoose.model("student", studentSchema, "student");

const student = mongoose.model("student");

//criando  um novo objeto dentro da collection
new student({
  name: "Vangel Pessoa",
  subject: "React Native",
  type: "Trabalho Pratico",
  value: 100,
})
  .save()
  .then(() => {
    console.log("Documento inserido");
  })
  .catch((err) => {
    console.log("Falha ao inserir o documento");
  });
