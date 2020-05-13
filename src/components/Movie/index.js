import React, { Component } from "react";
import "./Movie.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Info = () => {
    return (
      <div className="info">
        <div className="title">
          <h4>{this.props.data.title}</h4>
        </div>

        <div className="metaInfo">
          <div className="year">
            <span>{`Fecha: ${this.props.data.year}`}</span>
          </div>

          <div className="ranking">
            <span>{`Calificacion: ${this.props.data.qualification}`}</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="movie">
        <div className="poster">
          <img src={this.props.data.poster} alt={this.props.data.title} />
        </div>

        {/* this.props.showInfo ? <this.Info/> : null */}
        {this.props.showInfo && <this.Info />}
      </div>
    );
  }
}
