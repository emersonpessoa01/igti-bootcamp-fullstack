import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div className="center">
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}
