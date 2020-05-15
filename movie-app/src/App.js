import Acceuil from "./Components/Acceuil";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import React, { Component } from "react";
import Liste from "./Components/Maliste";
import Description from "./Components/Presentation";
export default class App extends Component {
  constructor() {
    super();
    this.favmovies = [];
    this.desmovies = [];
    this.description = [];
  }

  addFavoriteMovies = (el) => {
    if (this.favmovies.indexOf(el) == -1) {
      this.favmovies.push(el);
    } else if (this.favmovies.indexOf(el) > -1) {
      this.favmovies.splice(this.favmovies.indexOf(el), 1);
    }
  };
  //To display description
  displaydescription = (el) => {
    this.description.unshift(el);
    this.description.splice(1, this.description.length);
  };

  render() {
    return (
      <div className="App">
        <div>
          <switch>
            <Route
              exact
              path="/"
              render={() => (
                <Acceuil
                  favoris={this.addFavoriteMovies}
                  des={this.displaydescription}
                />
              )}
            />
            <Route
              path="/liste"
              render={() => <Liste array={this.favmovies} />}
            />
            <Route path="/Signup" render={() => <Signup />} />
            <Route path="/Login" render={() => <Login />} />
            <Route
              path="/Presentation"
              render={() => <Description arr={this.description} />}
            />
          </switch>
        </div>
      </div>
    );
  }
}
