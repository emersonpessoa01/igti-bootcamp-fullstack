import React from "react";

export default function Toggle({ enabled, description, onToggle }) {
  //const { enabled, description, onToggle } = props;
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
