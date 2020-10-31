//converter em uma API
import express from "express";
import timesRouter from "./times.js"

//criando instancia express
const app = express();
const port = 3011;

//informando ao express para utilizar json
app.use(express.json())

//criando roteador /times/campeao para redirecionar requisições
app.use("/times/campeao", timesRouter)
// app.get("/times/campeao", (req, res) => {
//   res.send(retornaCampeao());
// });

//iniciando servidor
app.listen(port, () => {
  console.log("FALA DEV");
});

