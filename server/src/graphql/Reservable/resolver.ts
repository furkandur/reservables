import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import ReservableService from "./service";
import { CreateReservableInput, Reservable } from "./schema";
import UserService from "../User/service";
import { User } from "../User/schema";
import Context from "../types/context";

@Resolver(() => Reservable)
export default class ReservableResolver {
  constructor(
    private reservableService: ReservableService,
    private userService: UserService
  ) {
    this.reservableService = new ReservableService();
    this.userService = new UserService();
  }

  @Mutation(() => Reservable)
  @Authorized()
  createReservable(
    @Arg("input") input: CreateReservableInput,
    @Ctx() context: any
  ) {
    return this.reservableService.createReservable(input, context);
  }

  @Mutation(() => Reservable, { nullable: true })
  deleteReservable(@Arg("id") id: string, @Ctx() context: any) {
    return this.reservableService.deleteReservable(id, context);
  }

  @Query(() => [Reservable], { nullable: true })
  reservables() {
    return this.reservableService.getReservable();
  }

  @Query(() => Reservable, { nullable: true })
  reservable(@Arg("id") id: string) {
    return this.reservableService.getReservableById(id);
  }

  @FieldResolver(() => User)
  async createdBy(@Root() reservable: Reservable, @Ctx() context: Context) {
    const userId =
      typeof reservable.createdBy == "string"
        ? reservable.createdBy
        : reservable.createdBy.toString();

    return context.dataloaders.userLoader.load(userId);
  }
}
