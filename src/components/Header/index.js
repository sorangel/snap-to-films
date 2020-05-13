import React, { Component } from "react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Synopsis from "../Synopsis";
import Movie from "../Movie";
import "./Header.css";
import MetaInfo from "../MetaInfo";
import PlayButton from "../PlayButton";

export default class Header extends Component {
  render() {
    if (!this.props.movie) {
      return null;
    }
    let tags = this.props.movie.categories || [];

    tags = tags.map(tag => {
      return tag.name;
    });

    return (
      <section className="header">
        <div className="background">
          {!!this.props.movie.gallery && (
            <img
              src={this.props.movie.gallery[0].source}
              alt="this.props.movie.title"
            />
          )}

          <div className="shadow"></div>
        </div>

        <div className="movie-container">
          <Movie data={this.props.movie}></Movie>
        </div>

        <div className="movie-details">
          <Title text={this.props.movie.title} />

          <SubTitle tags={tags} />

          <Synopsis text={this.props.movie.synopsis} />

          <MetaInfo
            duration="164 min"
            lenguage={
              !!this.props.movie.source
                ? this.props.movie.sources
                    .map(source => source.language)
                    .join(", ")
                : ""
            }
            ranking={this.props.movie.qualification}
          />
          {!!this.props.movie.sources && (
            <PlayButton
              showMovie={() => {
                window.open(this.props.movie.sources[0].source, "_blank");
              }}
            />
          )}
        </div>
      </section>
    );
  }
}
