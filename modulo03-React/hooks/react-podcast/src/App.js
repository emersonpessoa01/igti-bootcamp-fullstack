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

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  render() {
    return (
      <div>
        <h1>React componentDidUpdate</h1>

        <input
          type="text"
          placeholder="Digite aqui"
          value={paragraph1}
          oncChange={this.handleParagraph1}
        />
        <input
          type="text"
          placeholder="Digite aqui"
          value={paragraph2}
          oncChange={this.handleParagraph2}
        />
      </div>
    );
  }
}
