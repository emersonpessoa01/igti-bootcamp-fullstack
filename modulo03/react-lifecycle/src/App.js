import React, { Component } from "react";
import Users from "./components/users/Users";
import Toggle from "./components/toggle/Toggle";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();
    //console.log(json);

    this.setState({
      users: json.results,
    });
  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate de App.js");
  // }
  // componentWillUnmount() {
  //  console.log("componentWillUnmount de App.js");
  // }

  handleShowsUsers = (event) => {
    //console.log(event.target.checked);
    this.setState({
      showUsers: event.target.checked,
    });
  };

  render() {
    //return <div>{JSON.stringify(this.state.users)}</div>;

    const { showUsers, users } = this.state;
    console.log(showUsers);

    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle
          description="Mostrar usuários"
          enabled={showUsers}
          onToggle={this.handleShowsUsers}
        />

        <hr />
        {/* {showUsers ? <div>Users</div> : <div>Nada pra mostrar</div>} */}

        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
