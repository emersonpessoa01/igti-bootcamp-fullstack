import React from "react";

export default function Candidate({ candidate }) {
  const { id, name, votes } = candidate;
  return (
    <div>
      {id} - {name} - {votes}
    </div>
  );
}
 