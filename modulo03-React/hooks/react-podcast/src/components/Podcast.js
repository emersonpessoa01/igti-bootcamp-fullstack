import React, { Component } from "react";

export default class Podcast extends Component {
  render() {
    const { value } = this.props;
    // return <div>{JSON.stringify(value) || "nenhum podcast"}</div>;
    return <div>{JSON.stringify(value) || "nenhum podcast"}</div>;
  }
}
  