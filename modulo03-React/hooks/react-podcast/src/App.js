import React, { Component } from "react";
import Podcast from "./components/Podcast";
import Station from "./components/Station";
import Title from "./components/Title";

export default class App extends Component {
  constructor() {
    super();
    //todo objeto{} vazio é verdadeirável.Ele é truthy
    this.state = {
      selectedStation: "00.0", //frequencia
      selectedPodcast: null, //input
      podcasts: [], //arrays
    };
  }

  //serva para apenas uma requição
  componentDidMount = async () => {
    const res = await fetch("http://localhost:3001/podcasts");
    const json = await res.json();

    console.log(json);
    this.setState({ podcasts: json, selectedStation: "88.5" });
  };

  componentDidUpdate(_, previousState) {
    const { selectedStation: oldStation } = previousState;
    const { selectedStation, podcasts } = this.state;

    const selectedPodcast = podcasts.find(
      (Podcast) => Podcast.id === selectedStation
    );
    if (oldStation !== selectedStation) {
      this.setState({ selectedPodcast });
    }
  }

  // handleStationChange=(newStation) => {
  handleStationChange = (evt) => {
    const newStation = evt.target.value;
    this.setState({ selectedStation: newStation });
  };

  render() {
    const { selectedStation, selectedPodcast } = this.state;
    return (
      <div className="container">
        {/* <h1><Title value="React Radio Podcasts" /></h1> */}
        <h1>
          <Title> React Radio Podcasts</Title>
        </h1>
        <Station
          value={selectedStation}
          onStationChange={this.handleStationChange}
        />
        <Podcast value={selectedPodcast} />
      </div>
    );
  }
}
