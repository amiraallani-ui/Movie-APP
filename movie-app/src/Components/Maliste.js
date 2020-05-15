import React, { Component } from "react";
import popcorn from "./images/popcorn.png";

export default class Liste extends Component {
  render() {
    return (
      <div>
        <h1>
          Ma l<img src={popcorn} class="icon"></img>ste
        </h1>
        {this.props.array.map((el) => (
          <div class="Card">
            <img src={el.img} class="image"></img>
            <h2>{el.title}</h2>
            <h3>{el.genre}</h3>
          </div>
        ))}
      </div>
    );
  }
}
