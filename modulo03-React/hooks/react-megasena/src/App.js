import React from "react";

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
  return Math.random() * 60; // pega num de 0 a 1 e multiplica por 60
};

export default function App() {
  return (
    <div className="container">
      <h1 className="center">React Megasena</h1>
    </div>
  );
}
