// método que imprima no console a cidade de maior nome entre todos os estados
// biggerNameCity()

// método que imprima no console a cidade de menor nome entre todos os estados
// shortNameCity()

import { promises } from "fs";

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const statesFile = "Estados.json";
const citiesFile = "Cidades.json";

//1 - método que cria JSON pra cada estado com as cidades dentro
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

//2 - método que recebe como parâmetro o UF do estado e retorna quantidade de cidades
const getCitiesCount = async (uf) => {
  let cities = JSON.parse(await readFile(`./states/${uf}.json`, "utf8"));
  // console.log(cities);
  console.log(`2 - UF: ${uf}, count: ${cities.length} cidades`);
  return cities.length;
};
// getCitiesCount("PA");
getCitiesCount(); //QUANTIDADE CIDADE DE "PA"

//3 -  método que imprima no console um array com o UF dos cinco estados que mais possuem cidades
// statesMoreCities();

// const getStateWithMoreCities = async (more) => {
const getStateWithMoreCities = async () => {
  let states = JSON.parse(await readFile(statesFile, "utf8"));
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

    list.slice(0, 5).forEach(({ uf, count }) => {
      return result.push({ uf, count });
    });

    // console.log(list.slice(0, 5));
    // console.log("5 primeiro Estados com MENOR/MAIOR município -")
    console.log("3 - MENORES MUNICíPIO");
    console.log(result);
  });
};
// getStateWithMoreCities(true);
getStateWithMoreCities();

const getStateWithAnyLessCities = async (more) => {
  let states = JSON.parse(await readFile(statesFile, "utf8"));
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
    list.slice(-5).forEach(({ uf, count }) => {
      return result.push({ uf, count });
    });

    // console.log(list.slice(0, 5));
    // console.log("5 primeiro Estados com MENOR/MAIOR município -")
    console.log("3 - MAIORES MUNICíPIO");
    console.log(result);
  });
};
// getStateWithMoreCities(true);
getStateWithAnyLessCities();

//4 -  método que imprima no console um array com a cidade de maior nome de cada estado
// allStatesBiggerCityName();
const getBiggerName = async (uf) => {
  let cities = JSON.parse(await readFile(`./states/${uf}.json`, "utf8"));

  let result;
  cities.forEach((city) => {
    if (!result) result = city;
    else if (city.Nome.length > result.Nome.length) result = city;
    else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.length < result.Nome.length
    )
      result = city;
    // console.log(cities);
  });

  return result;
};
getBiggerName();

const getBiggerCityName = async () => {
  let states = JSON.parse(await readFile("Estados.json"));

  let result = [];
  states.forEach(async (state) => {
    let uf = state.Sigla;
    let city = (await getBiggerName(uf)).Nome;
    result.push(`${city} - ${uf}`);

    console.log("4 - cidades com maiores nomes ");
    console.log(result);
  });
};

getBiggerCityName();

//5 - método que imprima no console um array com a cidade de menor nome de cada estado
// allStatesShorterCityName();

const getSmallName = async (uf) => {
  let cities = JSON.parse(await readFile(`./states/${uf}.json`, "utf8"));

  let result;
  cities.forEach((city) => {
    if (!result) result = city;
    else if (city.Nome.length < result.Nome.length) result = city;
    else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.length < result.Nome.length
    )
      result = city;
    // console.log(cities);
  });

  return result;
};
getSmallName();

const getSmallCityName = async (bigger) => {
  let states = JSON.parse(await readFile("Estados.json"));

  let result = [];
  states.map(async (state) => {
    let uf = state.Sigla;
    let city;
    if (bigger) {
      city = (await getBiggerName(uf)).Nome;
    } else {
      city = (await getSmallName(uf)).Nome;
    }
    result.push(`${city} - ${uf}`);

    console.log("5 - cidades com menores nomes ");
    console.log(result);
  });
};

getSmallCityName();
