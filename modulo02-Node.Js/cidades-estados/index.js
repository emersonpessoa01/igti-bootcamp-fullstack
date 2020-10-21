import { promises } from "fs";

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const statesFile = "Estados.json";
const citiesFile = "Cidades.json";

const createFile = async () => {
  let states = JSON.parse(await readFile(statesFile));
  let cities = JSON.parse(await readFile(citiesFile));


  states.forEach(async(state) =>{
      const stateCities = cities.filter(city => city.Estado === state.ID);
      await writeFile(`./${state.Sigla}.json`, JSON.stringify(stateCities))
  })
  
};
createFile();
