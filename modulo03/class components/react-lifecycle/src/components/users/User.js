import React, { Component } from "react";
import css from "./user.module.css";

export default class User extends Component {
  render() {
    const { dob, name, picture, email } = this.props.user;

    return (
      <div className={css.flexRow}>
        <img className={css.avatar} src={picture.large} alt={name.first} />
        <span>
          {name.first} {name.last}, {dob.age} anos | email: {email}
        </span>
      </div>
    );
  }
}
