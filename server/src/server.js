const { GraphQLServer } = require("graphql-yoga");
const db = require("./db");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

function CreateServer() {
  const server = new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      // we pass other resolvers here
      Mutation,
      Query
    },
    // w
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({
      ...req,
      prisma: db
    })
  });
  return server;
}

module.exports = CreateServer;