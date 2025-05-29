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
import LocationService from "./service";
import { CreateLocationInput, Location } from "./schema";
import UserService from "../User/service";
import { User } from "../User/schema";
import Context from "../types/context";

@Resolver(() => Location)
export default class LocationResolver {
  constructor(
    private locationService: LocationService,
    private userService: UserService
  ) {
    this.locationService = new LocationService();
    this.userService = new UserService();
  }

  @Mutation(() => Location)
  @Authorized()
  createLocation(
    @Arg("input") input: CreateLocationInput,
    @Ctx() context: any
  ) {
    return this.locationService.createLocation(input, context);
  }

  @Mutation(() => Location, { nullable: true })
  deleteLocation(@Arg("id") id: string, @Ctx() context: any) {
    return this.locationService.deleteLocation(id, context);
  }

  @Query(() => [Location], { nullable: true })
  locations() {
    return this.locationService.getLocations();
  }

  @Query(() => Location, { nullable: true })
  location(@Arg("id") id: string) {
    return this.locationService.getLocationById(id);
  }

  @FieldResolver(() => User)
  async createdBy(@Root() location: Location, @Ctx() context: Context) {
    const userId =
      typeof location.createdBy == "string"
        ? location.createdBy
        : location.createdBy.toString();

    return context.dataloaders.userLoader.load(userId);
  }
}
