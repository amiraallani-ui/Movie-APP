import "./Card.css";
import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carcatere: "",
      movies: this.props.mov,
      title: "",
      genre: "",
      img: "",
      x: false,
      arr: [1, 2, 3, 4, 5],
      starClicked: "☆",
      starRate: null,
    };
  }

  handleCaractereChange = (e) => {
    this.setState({ caractere: e.target.value });
  };

  //Selection of films
  SelectMovies = () => {
    let films = this.state.movies;
    let Newfilms = films
      .filter((el) => {
        if (this.state.caractere === "") return el;
        else if (el.title.toLowerCase().includes(this.state.caractere))
          return el;
      })
      .filter((el) => {
        if (this.state.starRate == null) return el;
        else if (this.state.starRate === el.star) return el;
      });

    this.setState({ movies: Newfilms });
    console.log(this.state.movies);
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handlegenreChange = (e) => {
    this.setState({ genre: e.target.value });
  };
  handleimgChange = (e) => {
    this.setState({ img: e.target.value });
  };
  //to add movie
  addmovie = () => {
    let arr = this.state.movies;
    let obj = new Object();
    obj.title = this.state.title;
    obj.genre = this.state.genre;
    obj.img = this.state.img;
    arr.unshift(obj);
    this.setState({ movies: arr });
  };
  //To filter with stars
  getRate = (el) => {
    this.setState({ starRate: el + 1 });
    this.setState({ starClicked: "🌟" });
    console.log(this.state.starRate);
  };

  render() {
    const { fav } = this.props;
    return (
      <div class="block">
        <div>
          <div className="starRating">
            {this.state.arr.map((el) => (
              <button
                className="btn-star"
                onClick={() => this.getRate(this.state.arr.indexOf(el))}
              >
                {this.state.starClicked}
              </button>
            ))}
          </div>

          <div class="search">
            <input onChange={this.handleCaractereChange}></input>
            <button onClick={this.SelectMovies}>Recherche</button>
          </div>
          <div class="add-movie">
            <input
              onChange={this.handleTitleChange}
              placeholder="Title"
              className="input"
            ></input>
            <input
              onChange={this.handlegenreChange}
              placeholder="genre"
              className="input"
            ></input>
            <input
              onChange={this.handleimgChange}
              placeholder="image"
              className="input"
            ></input>
            <button onClick={this.addmovie} class="add">
              +
            </button>
          </div>
        </div>
        <div class="Card">
          {this.state.movies.map((el) => (
            <div>
              <img src={el.img} class="image"></img>
              <p>{el.genre}</p>
              <h3>{el.title}</h3>
              <p> {"★".repeat(el.star)}</p>

              <button
                onClick={() => {
                  fav(el);
                }}
                class="btn"
              >
                + Ma liste
              </button>
              <button onClick={() => this.props.d(el)} class="btn">
                Plus d'infos
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
