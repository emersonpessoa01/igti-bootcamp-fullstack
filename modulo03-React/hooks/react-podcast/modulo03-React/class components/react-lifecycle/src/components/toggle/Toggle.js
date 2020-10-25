import React, { Component } from "react";

export default class Toggle extends Component {
  render() {
    const { enabled, description, onToggle } = this.props;
    return (
      <div className="switch">
        <label>
          {description}
          <input type="checkbox" checked={enabled} onChange={onToggle} />
          <span className="lever"></span>
          On
        </label>
      </div>
    );
  }
}
