import "reflect-metadata";
import mongoose from "mongoose";
import { MONGO_URI } from "./utils/constants";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import Context from "./graphql/types/context";
import { buildSchema } from "type-graphql";
import { resolvers } from "./graphql";
import { verifyJwt } from "./utils/jwt";
import { User } from "./graphql/User/schema";
import authChecker from "./utils/authChecker";
import { createUserDataLoader } from "./graphql/User/loader";

const startApolloServer = async () => {
  // connect to MongoDB
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");

  // Build the schema
  const schema = await buildSchema({
    resolvers,
    authChecker,
    validate: true,
  });

  // Create the Apollo Server
  const server = new ApolloServer<Context>({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      let user: User | null = null;
      const authHeader = req.headers.authorization;
      if (authHeader) {
        user = verifyJwt<User>(authHeader);
      }
      const dataloaders = {
        userLoader: createUserDataLoader(),
      };
      return { req, res, user, dataloaders };
    },
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startApolloServer().catch((err) => {
  console.error("Failed to start server: ", err);
});
