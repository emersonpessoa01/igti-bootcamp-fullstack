import { promises } from "fs";

const { readFile, writeFile } = promises;

const init = async () => {
  try {
    const data = JSON.parse(await readFile("2003.json"));

    //montando array de times
    const times = [];
    data[0].partidas.forEach(({ mandante, visitante }) => {
      times.push({ time: mandante, pontuacao: 0 });
      times.push({ time: visitante, pontuacao: 0 });
    });

    //pegar cada rodada e executar alguma coisa pra elas

    console.log(times);
  } catch (err) {
    console.log(err);
  }
};
init();
