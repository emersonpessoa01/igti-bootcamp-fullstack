import React from "react";
import Info from "./Info";
import Picture from "./Picture";
import Position from "./Position";

export default function Candidate({ candidate, position }) {
  const { id, name, votes } = candidate;
  const sourceImage = `${id}.jpg`
  return (
    <div>
      <Position>{position}</Position>
      <Picture sourceImage={sourceImage} description={name}/>
      < Info />
      {name} - {votes}
    </div>
  );
}
