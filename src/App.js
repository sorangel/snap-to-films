// importamos todas las dependencias necesarias
import React, { Component } from "react";

//importamos todos los componentes necesarios
import Header from "./components/Header";
import Filters from "./components/Filters";
import Films from "./components/Films";
import Footer from "./components/Footer";

// importamos funciones necesarias para hacer peticiones  a la API/servidor
import {
  getMovies,
  getMoviesByYear,
  searchMovies,
  getYearsAvailable,
    getCategories
} from "./api";

// importamos los estilos necesarios
import "./reset.css";
import "./App.css";

// creamos un componente react
export default class App extends Component {
  // esta funcion especial se ejecuta  inmediatamente cuando se usa
  constructor(props) {
    // con super le damos permiso para leer y escribir en las propiedades/atributos q se le pasan a este componente
    super(props);

    // creamos el estado de nuestro componente para poder interactuar con el
    this.state = {
      //creamos el valor movies dentro de este estado como un array vacio
      movies: [],
      yearsAvailable: [],
        categories:[]
    };
  }

  // esta funcion especial de un componente react se ejecuta cuando el componente es mostrado o montado por primera vez en el DOM/html
  componentDidMount() {
    // usamos esta funcion para optener las peliculas de la pagina 6
    this.getPagination();
    this.getYearsAvailable();

      /*
      this.getPaginationByYear({
          pagination: 1,
          filterBy: "year",
          filterValue: 2010
      });

       */
  }

  getPaginationByYear = (options = {}) => {
    getMoviesByYear(options)
      .then(data => data.json())
      .then(myDataJson => {
        console.log(myDataJson);
        this.setState({
          movies: myDataJson.movies.sort()
        });
      })
      .catch(error => console.log(error));
  };

  searchMovies = (options = {}) => {
    searchMovies(options)
      .then(myData => myData.json())
      .then(myDatajson => {
        console.log(myDatajson);
        this.setState({ movies: myDatajson.movies });
      })
      .catch(error => {
        console.log(error);
      });
  };

  //    esta  funcion recibe un numero que corresponde a la pagina de peliculas que se quiere
  getPagination = (pag = 1) => {
    //    esta funcion optiene la ppeliculas y recibe de forma opcional un objeto, dicho objeto puede contener los valores( paginacon= numero)
    getMovies({ pagination: pag })
      // este then optiene los datos recibidos por getMovies y los convierte en un json/objeto
      .then(data => data.json())
      //a partir de aqui podemos ejecutar todos los then q necesitemos
      .then(myDataJson => {
        // esta funcion actualiza los datos del estado , en este caso estamos actualizando el valor movie
        this.setState({
          movies: myDataJson.movies
        });
      })
      //el catch es como un then con la unica diferencia de que esta funcion te facilita el error para poder saber lo q paso por si algo sucede
      .catch(error => console.log(error));
  };

  getYearsAvailable = options => {
    getYearsAvailable(options)
      .then(data => data.json())
      .then(dataJson => {
          dataJson.years.sort((a,b) => {
              if(parseInt(a) > parseInt(b)) {
                  return -1
              }

              if(parseInt(a) < parseInt(b)) {
                  return 1
              }

              return 0;
          });
        this.setState({ yearsAvailable: dataJson.years });
      })
      .catch(error => console.log(error));
  };

    getCategories = options => {
        getCategories(options)
            .then(data => data.json())
            .then(dataJson => {
                this.setState({ categories: dataJson.data });
            })
            .catch(error => console.log(error));
    };

  render() {
    const movie = !!this.state.movies ? this.state.movies[0] : {};
    return (
        <div>
         <main className="main">
        <Header movie={movie} />
        <Filters
          yearsAvailable={this.state.yearsAvailable}
          searchMovies={this.searchMovies}
          getPagination={this.getPagination}
          getPaginationByYear={this.getPaginationByYear}
        />
        <Films movies={this.state.movies} />
        <Footer />
      </main>
        </div>
    );
  }
}
