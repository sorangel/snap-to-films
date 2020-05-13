const miyo_tv_server_api_url = "https://miyo-tv-server.herokuapp.com/api";

export const getMovies = (options = {}) => {
  const pagination = options.pagination || 1;
  return fetch(
    `${miyo_tv_server_api_url}/movies/pagination?pagination=${pagination}`
  );
};

export const getMoviesByYear = (options = {}) => {
  const pagination = options.pagination || 1;
  const filterBy = options.filterBy || "year";
  const filterValue = options.filterValue || 2020;
  return fetch(
    `${miyo_tv_server_api_url}/movies/pagination?pagination=${pagination}&filterBy=${filterBy}&filterValue=${filterValue}`
  );
};

export const searchMovies = (options = {}) => {
  const title = options.title || "";

  return fetch(
    `${miyo_tv_server_api_url}/movies/search?search=${title}&by=title&maxMovies=30`
  );
};

export const getYearsAvailable = (options = {}) => {
  return fetch(`${miyo_tv_server_api_url}/movies/years-available`);
};

export const getCategories = (options = {}) => {
  return fetch(`${miyo_tv_server_api_url}/movies/categories`);
};
