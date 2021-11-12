const movieMutation = require('./movie.mutation');
module.exports = {
  Mutation: {
    ...movieMutation,
  },
};
