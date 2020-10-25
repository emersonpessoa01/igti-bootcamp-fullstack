import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";
import css from "./components/countries/countries.module.css"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = allCountries.reduce(
      (accumulator, current) => {
        return accumulator + current.population;
      },
      0
    );

    this.setState({
      //allConugtries: json,
      // allCountries: allCountries,
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation: filteredPopulation,
      
    });
  }

  handleChangeFilter = (evt) => {
    console.log(evt.target.value);
    const newText = evt.target.value;

    this.setState({
      filter: newText,
    });

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = filteredCountries.reduce(
      (accumulator, current) => {
        return accumulator + current.population;
      },
      0
    );

    this.setState({
      filteredCountries: filteredCountries,
      filteredPopulation: filteredPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state;
    // console.log(allCountries)
    return (
      <div className="container">
        <h1 className={css.title}>React Countries</h1>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

// const styles= {
//   centeredTitle:{
//     textAlign: 'center',
//     color: 'blueViolet',
//   }
// }