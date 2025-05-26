import { GraphQLError } from "graphql";
import { CreateUserInput, LoginInput, UserModel } from "./schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../utils/constants";
import { signJwt } from "../../utils/jwt";
import Context from "../types/context";

class UserService {
  async createUser(input: CreateUserInput) {
    return UserModel.create(input);
  }

  async getUsers() {
    return UserModel.find();
  }

  async getUserById(id: string) {
    return UserModel.findById(id);
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

    console.log(user);

    const token = signJwt(user);

    return token;
  }
}

export default UserService;
