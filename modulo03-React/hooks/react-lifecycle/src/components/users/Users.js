import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    console.log("componentDidMont de Users.js");

    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate de Users.js");
  }
  componentWillUnmount() {
    //console.log("componentWillUnmount de Users.js");
    clearInterval(this.interval);
  }

  render() {
    //console.log(this.props.users)
    //console.log(users);
    const { users } = this.props;
    const { secondsVisible } = this.state;

    return (
      <div>
        <p>Components Users visível por {secondsVisible} segundos</p>
        <ul>
          {users.map((user) => {
            const { login } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
