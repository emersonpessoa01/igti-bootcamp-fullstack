import React from "react";
import Info from "./Info";
import Name from "./Name";
import Percentage from "./Percentage";
import Picture from "./Picture";
import Popularity from "./Popularity";
import Position from "./Position";
import Votes from "./Votes";
import css from "./candidate.module.css"
import { formatPercentage } from "../helpers/format";

export default function Candidate({ candidate, position }) {
  const { id, name, votes, percentage, popularity, previousVotes } = candidate;
  const sourceImage = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture sourceImage={sourceImage} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVotes}/>
        <Percentage>{formatPercentage(percentage)}</Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  ); 
}
