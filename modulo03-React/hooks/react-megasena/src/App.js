import React, { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import SixNumbers from "./SixNumbers";

//construindo array de 60 numeros
const getEmptyArray = () => {
  const array = Array.from({
    length: 60,
  }).map((_, index) => {
    const id = index + 1;
    const description = id.toString().padStart(2, "0"); //posicionado o zero a esquerda

    return {
      id,
      description,
      value: id,
      count: 0,
    };
  });

  return array;
};

//funcao que vai gera numero aleatorio entre 1 a 60
const generateNumber = (from = 1, to = 60) => {
  return Math.max(from, Math.ceil(Math.random() * to)); // pega num de 0 a 1 e multiplica por 60 e arredonda pra cima
};

//numbers: vetor de numeros de 1 a 60
//sixNumbersSort: 6 numeros sorteados;
//isCalculating: booleano
//limit: quantidade de sorteios p/ ser definido;
export default function App() {
  //numbers,sixNumberSort,sixNumbersSort, isCalculating
  const [numbers, setNumbers] = useState(getEmptyArray());
  const [sixNumbersSort, setSixNumbersSort] = useState([1,2,3,4,5,6]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [limit, setLimit] = useState(1);

  // console.log(numbers)

  // const handleLimitChange = (newLimit) =>{
  //   setLimit(newLimit )
  // }
  //
  const handleLimitChange = (event) => {
    const number = Number(event.target.value);
    setLimit(number);
  };

  const handleInitSort = () => {
    setNumbers(getEmptyArray());
    setSixNumbersSort([]);
    setIsCalculating(true);
  };

  return (
    <div className="container">
      <h1 className="center">React Megasena</h1>

      <Form
        data={{ limit, isCalculating }}
        onLimitChange={handleLimitChange}
        onButtonClick={handleInitSort}
      />
      <Numbers numbers={numbers} />
      <SixNumbers numbers={sixNumbersSort}/>
    </div>
  );
}
