import React, { Component } from "react";

export default class Podcast extends Component {
  render() {
    const { value } = this.props; //dispara a função selectedPodcast

    if (!value) {
      return <p>nenhum podcast encontado </p>;
    }
    const { img, title, description } = value;
    // return <div>{JSON.stringify(value) || "nenhum podcast"}</div>;
    return (
      <div>
        <img src={`./img/${img}`} />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    );
  }
}
