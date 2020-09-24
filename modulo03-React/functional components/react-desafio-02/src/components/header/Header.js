import React from "react";
import { formatNumber } from "../helpers/formatHelpers";
import css from "./header.module.css";

export default function Header({
  filter,
  countryCount,
  totalPopulation,
  onChangeFilter,
}) {
  // handleInputChange=(evt)=>{
  //     // console.log(evt.target.value)
  //     const newText = evt.target.value
  //     this.props.onChangeFilter(newText)
  // };

  // const { filter, countryCount, totalPopulation, onChangeFilter } = props;
  return (
    <div className={css.flexRow}>
      <input
        style={styles.centeredTitle}
        placeholder="País"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />{" "}
      |{" "}
      <span className={css.countries}>
        Países: <strong>{countryCount}</strong>
      </span>{" "}
      |{" "}
      <span className={css.population}>
        População: <strong>{formatNumber(totalPopulation)} </strong>
      </span>
    </div>
  );
}
const styles = {
  centeredTitle: {
    textAlign: "left",
    color: "blue",
    fontFamily: "Montserrat",
  },
};
