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
        <p>Fala dev..beleza!</p>
      </div>
    );
  }
}
