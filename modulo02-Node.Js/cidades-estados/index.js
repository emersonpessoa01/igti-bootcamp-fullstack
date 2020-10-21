


    
    
    // método que imprima no console um array com o UF dos cinco estados que menos possuem cidades    
    // statesLessCities();
    
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
  });
};
createFile();


// método que recebe como parâmetro o UF do estado e retorna quantidade de cidades
async function getCitiesCount(uf){
  let data = await readFile(`./states/${uf}.json`, "utf8");
  let cities = JSON.parse(data);
  console.log(cities);
}
getCitiesCount("PA"); //QUANTIDADE CIDADE DE "PA"


// método que imprima no console um array com o UF dos cinco estados que mais possuem cidades
  // statesMoreCities();    
  
