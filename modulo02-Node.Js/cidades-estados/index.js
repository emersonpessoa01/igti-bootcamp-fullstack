// método que imprima no console um array com a cidade de maior nome de cada estado
// allStatesBiggerCityName();

//método que imprima no console um array com a cidade de menor nome de cada estado
// allStatesShorterCityName();

// método que imprima no console a cidade de maior nome entre todos os estados
// biggerNameCity()

// método que imprima no console a cidade de menor nome entre todos os estados
// shortNameCity()

import { promises } from "fs";

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const statesFile = "Estados.json";
const citiesFile = "Cidades.json";

// método que cria JSON pra cada estado com as cidades dentro
// createFiles()
const createFile = async () => {
  let states = JSON.parse(await readFile(statesFile, "utf-8"));
  let cities = JSON.parse(await readFile(citiesFile, "utf-8"));

  states.forEach(async (state) => {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await writeFile(
      `./states/${state.Sigla}.json`,
      JSON.stringify(stateCities)
    );
    // console.log(stateCities)
  });
};
createFile();

// método que recebe como parâmetro o UF do estado e retorna quantidade de cidades
const getCitiesCount = async (uf) => {
  let cities = JSON.parse(await readFile(`./states/${uf}.json`, "utf8"));
  // console.log(cities);
  // console.log(
  //   `UF: ${uf}, count: ${cities.length} cidades`
  // );
  return cities.length;
};
// getCitiesCount("PA");
getCitiesCount(); //QUANTIDADE CIDADE DE "PA"

// método que imprima no console um array com o UF dos cinco estados que mais possuem cidades
// statesMoreCities();

const getStateWithMoreCities = async (more) => {
  let states = JSON.parse(await readFile("Estados.json", "utf8"));
  const list = [];

  states.forEach(async (state) => {
    let uf = state.Sigla;
    let count = await getCitiesCount(uf);
    list.push({
      uf,
      count,
    });

    //ordenando do maior para o menor
    list.sort((a, b) => {
      if (a.count < b.count) return -1;
      else if (a.count > b.count) return 1;
      else return 0;
    });

    //Selecionando os 5 primeiro Estados com maior município
    //list.slice(0,5)//pega de 0 até 5a posição
    const result = [];

    if (more) {
      list.slice(0, 5).forEach(({ uf, count }) => {
        return result.push(
          `5 primeiro Estados com MENOR município - ${uf}: ${count}`
        );
      });
    } else {
      list.slice(-5).forEach(({ uf, count }) => {
        return result.push(
          `5 primeiro Estados com MAIOR município - ${uf}: ${count}`
        );
      });
    }

    // console.log(list.slice(0, 5));
    console.log(result);
  });
};
getStateWithMoreCities(true);
getStateWithMoreCities(false);

