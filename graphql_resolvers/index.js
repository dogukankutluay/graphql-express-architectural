const Query = require('./Query/index');
const Mutation = require('./Mutation/index');
const resolvers = {
  ...Query,
  ...Mutation,
};
module.exports = resolvers;
