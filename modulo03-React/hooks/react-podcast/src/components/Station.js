import React, { Component } from 'react'

export default class Station extends Component {
  render() {
    const {value} = this.props;
    return (
      <div className="center">
        <input type="text" value={value} />
        <input type="range" />
      </div>
    )
  }
}
