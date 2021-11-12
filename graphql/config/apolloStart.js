const { ApolloServer } = require('apollo-server-express');
const { join } = require('path');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const resolvers = require('../../graphql_resolvers/index');

// Load schema from the file
const schema = loadSchemaSync(join(__dirname, '../typeDefs/schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

//Apollo start
const apolloStart = async app => {
  const apolloServer = new ApolloServer({
    schema: schemaWithResolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
};
module.exports = apolloStart;
