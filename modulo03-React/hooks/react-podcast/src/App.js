import React, { Component } from "react";
import Station from "./components/Station";
import Title from "./components/Title";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedStation: "88.5",
      selectedPodcast: {},
      podcasts: [],
    };
  }

  render() {
    const { selectedStation } = this.state;
    return (
      <div className="container">
        {/* <h1><Title value="React Radio Podcasts" /></h1> */}
        <h1>
          <Title> React Radio Podcasts</Title>
        </h1>

        <Station value={selectedStation} />
      </div>
    );
  }
}
