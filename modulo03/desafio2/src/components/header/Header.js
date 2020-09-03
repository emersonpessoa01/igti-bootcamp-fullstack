import React, { Component } from "react";

export default class Header extends Component {
    // handleInputChange=(evt)=>{
    //     // console.log(evt.target.value)
    //     const newText = evt.target.value
    //     this.props.onChangeFilter(newText)
    // };
  render() {
      const {filter,countryCount, onChangeFilter, totalPopulation} = this.props;
    return (
      <div>
        <input type="text" value={filter} onChange={onChangeFilter} /> |<span>Países: {countryCount}</span> |<span>População: {totalPopulation}</span>
      </div>
    );
  }
}
