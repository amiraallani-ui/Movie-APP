import React, { Component } from "react";
import "./login.css";
import popcorn from "./images/popcorn.png";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  authentication = () => {
    for (var i = 0; i < this.state.email.length; i++) {
      if (
        this.state.email[i] == localStorage.getItem("email")[i] &&
        this.state.Password[i] == localStorage.getItem("password")[i]
      ) {
        alert("Bienvenue dans Pipoca");
      } else {
        alert(
          "Oups!Veuillez vérifier votre mot de passe et votre adresse mail"
        );
      }
    }
    alert("Veuillez créer un compte");
  };

  render() {
    return (
      <div>
        <form class="form">
          <h1>
            Se connecter à P<img src={popcorn} class="icon"></img>poca
          </h1>
          <label for="email" class="email">
            Adresse e-mail
          </label>
          <input type="email" id="email" onChange={this.handleEmailChange} />
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <button class="btn" onClick={this.authentication}>
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}
