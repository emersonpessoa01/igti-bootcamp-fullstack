import React, { Component } from "react";

export default class Band extends Component {
  constructor() {
    super();

    this.state = {
      bandName: "Rush",
      bandMembers: [
        { id: 1, name: "Neil Peart", instrument: "Drums" },
        { id: 2, name: "Alex Lifeson", instrument: "Guitar" },
        { id: 3, name: "Geddy Lee", instrument: "Bass" },
      ],
    };
  }

  render() {
    const { bandMembers } = this.state;

    return (
      <div align="center">
        {/* <h5>~{bandName}~</h5> */}

        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <ul key={id}>
              <li>
                {id}) {name} - {instrument}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}
