import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Filters.css";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datesOptions: [],
      categoriesOptions: ["Accion", "Drama", "Ficcion", "Comedia"],
      date: "",
      category: "",
      movieTitle: ""
    };
  }

  changeMovieTitle = (newMovieTitle = "") => {
    this.setState({ movieTitle: newMovieTitle });
    this.props.searchMovies({
      title: newMovieTitle
    });
  };

  changeDate = (newDate = "") => {
    this.setState({ date: newDate });

    if (newDate === "") {
      this.props.getPagination();
    } else {
      this.props.getPaginationByYear({
        pagination: 1,
        filterBy: "year",
        filterValue: parseInt(newDate)
      });
    }
  };

  changeCategory = (newCategory = "") => {
    this.setState({ category: newCategory });
    if (newCategory === "") {
      this.props.getPagination();
    } else {
      this.props.getPaginationByYear({
        pagination: 1,
        filterBy: "categories",
        filterValue: newCategory
      });
    }
  };

  getOptions = (options = []) => {
    return options.map((option, key) => {
      return (
        <option key={key} value={option}>
          {option}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="filters">
        <div className="dates">
          <select
            onChange={event => {
              const newDate = event.target.value;
              this.changeDate(newDate);
            }}
            value={this.state.date}
          >
            <option value={""}>Año</option>
            {this.getOptions(this.props.yearsAvailable)}{" "}
          </select>
        </div>

        <div className="categories">
          <select
            onChange={event => {
              const newCategory = event.target.value;
              this.changeCategory(newCategory);
            }}
            value={this.state.category}
          >
            <option value={""}>Categoria</option>
            {this.getOptions(this.state.categoriesOptions)}{" "}
          </select>
        </div>

        <div className="space" />

        <div className="search">
          <input
            type="text"
            value={this.state.movieTitle}
            onChange={event => {
              const movieTitle = event.target.value;
              this.changeMovieTitle(movieTitle);
            }}
            placeholder="Buscar por titulo..."
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    );
  }
}
