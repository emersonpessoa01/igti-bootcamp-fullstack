import React, { Component } from "react";

export default class Station extends Component {
  /* handleInputChange=(evt)=>{
    const newStation = evt.target.value;
     this.props.onStationChange(newStation)
  }*/

  render() {
    const { value, onStationChange } = this.props;
    const { stationStyle } = styles;

    return (
      <div className="center">
        <input style={stationStyle} type="text" value={value} readOnly />

        <input
          type="range"
          value={value}
          min="88.5"
          max="90"
          step="0.1"
          // onChange={this.handleInputChange}
          onChange={onStationChange}
        />
      </div>
    );
  }
}

const styles = {
  stationStyle: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    width: "300px",
    textAlign: "center",
    shadowRadius: "50px",
  },
};
