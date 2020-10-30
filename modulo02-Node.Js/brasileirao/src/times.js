import express from "express";
import { promises } from "fs";

const { readFile, writeFile } = promises;
const router = express.Router();

router.get("/",async (_, res) => {
  res.send(await retornaCampeao());
});


const times = [];

const init = async () => {
  try {
    const data = JSON.parse(await readFile("2003.json"));

    //montando array de times
    data[0].partidas.forEach(({ mandante, visitante }) => {
      times.push({ time: mandante, pontuacao: 0 });
      times.push({ time: visitante, pontuacao: 0 });
    });

    //preenchendo a pontuacao de times no array de times
    //iterar rodada: pegar cada rodada e executar alguma coisa pra elas
    data.forEach((rodada) => {
      rodada.partidas.forEach(
        // const {placar_mandante, placar_visitante, mandante} = partida;

        ({ placar_mandante, placar_visitante, mandante, visitante }) => {
          const indexMandante = times.findIndex(
            (item) => item.time === mandante
          ); //encontrar posicao para pontuar o mandante
          const indexVisitante = times.findIndex(
            (item) => item.time === visitante
          ); //pontuar visitante
          let timeMandante = times[indexMandante]; //atualizar no array
          let timeVisitante = times[indexVisitante]; //atualizar no array

          if (placar_mandante > placar_visitante) {
            timeMandante.pontuacao += 3;
            times[indexMandante] = timeMandante;
          } else if (placar_visitante > placar_mandante) {
            timeVisitante.pontuacao = +3;
            times[indexVisitante] = timeVisitante;
          } else {
            timeMandante.pontuacao += 1;
            timeVisitante.pontuacao += 1;
            times[indexMandante] = timeMandante;
            times[indexVisitante] = timeVisitante;
          }
        }
      );
    });

    //Ordenar times pela pontuaçao em ordem crescenter
    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    });

    //gravar os dados do array times em arquivo
    await writeFile("times.json", JSON.stringify(times));

    // console.log(times);
    // console.log(times[0]);//imprimindo somente o time campeao
  } catch (err) {
    console.log(err);
  }
};
init();

const retornaCampeao = async () => {
  // return times[0];
  const data = JSON.parse(await readFile("times.json", "utf8"));
  return data[0]
};
retornaCampeao();


export default router;