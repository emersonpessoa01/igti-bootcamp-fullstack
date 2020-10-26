import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      paragraph1: "",
      paragraph2: "",
      sum: 0,
    };
  }

  handleParagraph1 = (evt) => {
    this.setState({
      paragraph1: evt.target.value,
    });
  };
  handleParagraph2 = (evt) => {
    this.setState({
      paragraph2: evt.target.value,
    });
  };
//
  componentDidUpdate( ) {
      console.log("componetDidUpdate");
      document.title = this.state.paragraph1.length
  }

  render() {
    const { paragraph1, paragraph2, sum } = this.state;

    return (
      <div className="container">
        <h1>React componentDidUpdate</h1>
        <input
          autoFocus
          type="text"
          placeholder="Digite aqui"
          value={paragraph1}
          onChange={this.handleParagraph1}
        />
        <input
          type="text"
          placeholder="Digite aqui"
          value={paragraph2}
          onChange={this.handleParagraph2}
        />
        <p>parágrafo 1: {paragraph1}</p>
        <p>parágrafo 2: {paragraph2}</p>
        <p>Quantidades de caracteres do parágrafo 2: {sum}</p>
      </div>
    );
  }
}
