import React, { Component } from 'react'

export default class Podcast extends Component {
  render() {
    return (
      <div>
      {this.props.value || "nenhum podcast" }
      </div>
    )
  }
}
