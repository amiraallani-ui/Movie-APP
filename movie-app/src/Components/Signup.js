import React, { Component } from "react";
import popcorn from "./images/popcorn.png";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      newEmail: "",
      newPassword: "",
    };
  }

  handleEmailChange = (e) => {
    localStorage.setItem("email", e.target.value);
    this.setState({ newEmail: e.target.value });
  };
  handlePasswordChange = (e) => {
    localStorage.setItem("password", e.target.value);
    this.setState({ newPassword: e.target.value });
  };
  render() {
    return (
      <div>
        <form class="form">
          <h1>
            S'inscrire à P<img src={popcorn} class="icon"></img>poca
          </h1>
          <label for="email">E-mail</label>
          <input type="email" id="email" onChange={this.handleEmailChange} />
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <button class="btn">S'inscrire</button>
        </form>
      </div>
    );
  }
}
