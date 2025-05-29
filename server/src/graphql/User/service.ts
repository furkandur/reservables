import { GraphQLError } from "graphql";
import { CreateUserInput, LoginInput, User, UserModel } from "./schema";
import bcrypt from "bcrypt";
import { signJwt } from "../../utils/jwt";
import Context from "../types/context";
import mongoose from "mongoose";

const { MongoServerError } = mongoose.mongo;

class UserService {
  async getUsers() {
    return UserModel.find();
  }

  async getUserById(id: string) {
    console.log("gerUserById()");
    return UserModel.findById(id);
  }

  async signup(input: CreateUserInput, context: Context) {
    try {
      const user = await UserModel.create(input);
      const userForToken = {
        ...user.toObject(),
        password: undefined, // Exclude password from the token
      };
      const token = signJwt(userForToken);

      context.res.setHeader("Authorization", token);

      return token;
    } catch (error) {
      if (error instanceof MongoServerError) {
        if (error.code === 11000) {
          throw new GraphQLError("User already exists", {
            extensions: {
              code: "USER_ALREADY_EXISTS",
              http: {
                status: 400,
              },
            },
          });
        }
      }
      throw new GraphQLError("Failed to create user", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
          http: {
            status: 500,
          },
        },
      });
    }
  }

  async login(input: LoginInput, context: Context) {
    const user = await UserModel.findOne({ email: input.email }).lean();

    const error = new GraphQLError("Invalid credentials", {
      extensions: {
        code: "INVALID_CREDENTIALS",
        http: {
          status: 401,
        },
      },
    });

    if (!user) {
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);

    if (!isPasswordValid) {
      throw error;
    }

    const userForToken = {
      ...user,
      password: undefined, // Exclude password from the token
    };

    console.log(userForToken);

    const token = signJwt(userForToken);

    context.res.setHeader("Authorization", token);

    return token;
  }
}

export default UserService;
