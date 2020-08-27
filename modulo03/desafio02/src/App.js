import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        flag,
        population,
      };
    });

    this.setState({
      // allCountries: allCountries,
      allCountries,
    })
  }
  render() {
    const { allCountries } = this.state;
    // console.log(allCountries)
    
    return (
      <div className="container">
        <h1>React Countries</h1>
      </div>
    );
  }
}
