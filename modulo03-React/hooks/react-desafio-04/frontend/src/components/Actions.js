import React from "react";

export default function Actions({ id, type, onActionClick }) {
  const handleIconClick=()=>{
    onActionClick(id, type);
  }

  return (
    <span>
      <i
        className="material-icons"
        onClick={handleIconClick}
        style={{ cursor: "pointer" }}
      >
        {type}
      </i>
    </span>
  );
}
