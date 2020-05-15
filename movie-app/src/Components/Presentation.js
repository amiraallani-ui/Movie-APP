import React, { Component } from "react";
import "./presentation.css";
import popcorn from "./images/popcorn.png";

export default class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="component">
        <h1>
          Descr<img src={popcorn} class="icon"></img>ption
        </h1>
        {this.props.arr.map((el) => (
          <div className="description">
            <img src={el.img} class="affiche"></img>
            <div class="info">
              <h1>{el.title}</h1>
              <h2>{el.genre}</h2>
              <h3>Synopsis:</h3>
              <p className="font"> {el.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
