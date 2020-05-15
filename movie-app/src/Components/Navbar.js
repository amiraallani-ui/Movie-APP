import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import popcorn from "./images/popcorn.png";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <h1>
            Bienvenue à P<img src={popcorn} class="icon"></img>poca
          </h1>
          <div className="Navbar-style">
            <Link to="/">
              <li>Acceuil</li>
            </Link>
            <Link to="/Presentation">
              <li>Description</li>
            </Link>

            <Link to="/liste">
              <li>Ma liste</li>
            </Link>
            <div />

            <div class="Nav">
              <div class="inscription">
                <Link to="/Login">
                  <li>Se connecter /</li>
                </Link>
                <Link to="/Signup">
                  <li>S'inscrire</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
