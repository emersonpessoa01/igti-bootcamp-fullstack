import React, { Component } from "react";

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
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {candidates.map(({ id,name, votes }) => {
          return (
            <p key={id}>
              {name} - {votes}
            </p>
          );
        })}
      </div>
    );
  }
}
