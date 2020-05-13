import React, { Component } from "react";
import Movie from "../Movie";
import "./Films.css";

export default class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="films">
        {!!this.props.movies && this.props.movies.map((movie, key) => {
          return <div  key={key} className="movie">
            <Movie showInfo={true} data={movie}/>
          </div>;
        })}
      </div>
    );
  }
}
