import React, { Component } from "react";
import { formatNumber } from "../helpers/formatHelpers";
import css from "./header.module.css";

export default class Header extends Component {
  // handleInputChange=(evt)=>{
  //     // console.log(evt.target.value)
  //     const newText = evt.target.value
  //     this.props.onChangeFilter(newText)
  // };
  render() {
    const {
      filter,
      countryCount,
      totalPopulation,
      onChangeFilter,
    } = this.props;
    return (
      <div className={css.flexRow}>
        <input style={styles.centeredTitle}
          placeholder="País"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        /> |{" "}
        <span className={css.countries}>
          {countryCount>1?"Países":"País"}: <strong>{countryCount}</strong>
        </span> |{" "}
        <span className={css.population}>
          População: <strong>{formatNumber(totalPopulation)} </strong>
        </span>
      </div>
    );
  }
}
const styles= {
  centeredTitle:{
    textAlign: 'left',
    color: 'blue',
    fontFamily: 'Montserrat'
  }
}