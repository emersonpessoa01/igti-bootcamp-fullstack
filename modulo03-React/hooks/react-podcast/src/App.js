import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      paragraph1: "",
      paragraph2: "",
      sum: 0,
    }
  }

  handleComponentDidUpdate1=(evt) => {
    setState({
	paragraph1: evt.target.value
	})
  }
  handleComponentDidUpdate2=(evt) => {
    setState({
	paragraph2: evt.target.value
	})
  }

  componentDidUpdate(_, previousState) {
    console.log("componetDidUpdate")
	document.title = this.state.paragraph1.length
  }

  render() {
    const { paragraph1, paragraph2, value} =this.state

    return (
      <div>
        <h1>React componentDidUpdate</h1>
        <input
          type="text"
          placeholder="Digite aqui"
          value={paragraph1}
          onChange={this.handleComponentDidUpdate1}
        />
        <input
          type="text"
          placeholder="Digite aqui"
          value={paragraph2}
          onChange={this.handleComponentDidUpdate2}
        />
	<p>parágrafo 1: {paragraph1}</p>
	<p>parágrafo 2: {paragraph2}</p>
	<p>Quantidades de caracteres do parágrafo 2: {sum}</p>
      </div>
    );
  }
}


