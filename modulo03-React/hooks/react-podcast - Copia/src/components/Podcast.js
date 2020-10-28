import React, { Component } from "react";

export default class Podcast extends Component {
  render() {
    const { value } = this.props; //dispara a função selectedPodcast

    if (!value) {
      return <p>Nenhum podcast encontado </p>;
    }
    const { img, title, description } = value;
    const { imageStyle } = styles;
    // return <div>{JSON.stringify(value) || "nenhum podcast"}</div>;
    return (
      <div className="center">
        <img style={imageStyle} src={`./img/${img}`} />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    );
  }
}

const styles = {
  imageStyle: {
    width: "200px",
    height: "200px",
    textAlign: "center",
  },
};
