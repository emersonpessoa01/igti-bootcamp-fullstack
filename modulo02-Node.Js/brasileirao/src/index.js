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

    //preenchendo a pontuacao de times no array de times
    //iterar rodada: pegar cada rodada e executar alguma coisa pra elas
    data.forEach(rodada =>{
      rodada.partidas.forEach(partida =>{
        if(partida.placar_mandante> partida.placar_visitante){
          times.findIndex(item => item.time ===partida.placar_mandante)
        }
      })
    })
    console.log(times);
  } catch (err) {
    console.log(err);
  }
};
init();
