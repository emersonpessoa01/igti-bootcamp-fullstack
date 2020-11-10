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
await mongoose.connect(
  "mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//criacao do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance:{
    type: Number,
    required: true,
  },
  conta:{
    type: Number,
    required: true,
  },
  agencia:{
    type: Number,
    required: true,
  },
});

mongoose.model("Student",studentSchema)