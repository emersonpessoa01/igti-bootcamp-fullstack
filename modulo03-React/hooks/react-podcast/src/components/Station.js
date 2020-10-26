import React, { Component } from "react";

export default class Station extends Component {
  /* handleInputChange=(evt)=>{
    const newStation = evt.target.value;
     this.props.onStationChange(newStation)
  }*/

  render() {
    const { value, onStationChange } = this.props;
    return (
      <div>
        <input type="text" value={value} readOnly />
        <input
          type="range"
          value={value}
          min="88.5"
          max="93.1"
          step="0.1"
          // onChange={this.handleInputChange}
          onChange={onStationChange}
        />
      </div>
    );
  }
}
