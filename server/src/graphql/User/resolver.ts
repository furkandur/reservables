import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import UserService from "./service";
import { CreateUserInput, LoginInput, User } from "./schema";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg("input") input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => String)
  login(@Arg("input") input: LoginInput, @Ctx() context: any) {
    return this.userService.login(input, context);
  }

  @Query(() => [User], { nullable: true })
  users() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  user(@Arg("id") id: string) {
    return this.userService.getUserById(id);
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: any) {
    return context.user;
  }
}
