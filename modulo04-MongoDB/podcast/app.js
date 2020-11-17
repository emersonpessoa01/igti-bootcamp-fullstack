import express from "express";
import { podcastRouter } from "./routes/podcastRouter.js";
import { db } from "./models/index.js";

//Conexao com o MongoDB
(async () => {
  try {
    await db.mongoose.connect(
      db.url,
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
app.use("/podcast", podcastRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Fala Dev -- API STARTED");
});
