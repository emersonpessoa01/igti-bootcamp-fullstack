import React, { Component } from "react";
import Candidates from "./components/Candidates";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(async () => {
      // fetch('http://localhost:8080/votes').then(res =>{
      //   return res.json().then(json => {
      //     console.log(json)
      //   })
      // })
      const res = await fetch("http://localhost:8080/votes");
      const json = await res.json();
      // console.log(json); é substuido por: abaixo
      this.setState({
        candidates: json.candidates,
      });
    }, 1000);
  }

  render() {
    const { candidates } = this.state;

    if (candidates.length === 0) {
      return (
        <Spinner description="Carregando..." />
      );
    }
    return (
      <div>
        {/* <Header title="Votação" /> */}
        <Header>Votação</Header>
        <Candidates candidates={candidates}/>
      </div>
    );
  }
}
