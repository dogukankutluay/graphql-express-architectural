const { movies } = require('../../data');
const movieQuery = {
  movies: () => {
    return movies;
  },
};
module.exports = movieQuery;
