import React from "react";
import css from "./user.module.css";

export default function User ({user}) {
    // const {user} = props;
    const { dob, name, picture, email } = user;
    // const { dob, name, picture, email } = props.user;

    return (
      <div className={css.flexRow}>
        <img className={css.avatar} src={picture.large} alt={name.first} />
        <span>
          {name.first} {name.last}, {dob.age} anos | email: {email}
        </span>
      </div>
    );
}
