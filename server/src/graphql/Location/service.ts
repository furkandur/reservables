import { GraphQLError } from "graphql";
import Context from "../types/context";
import { CreateLocationInput, Location, LocationModel } from "./schema";

class LocationService {
  async getLocations() {
    return LocationModel.find().lean();
  }

  async getLocationById(id: string) {
    return LocationModel.findById(id);
  }

  async createLocation(input: CreateLocationInput, context: Context) {
    const location = await LocationModel.create({
      ...input,
      createdBy: context.user?._id,
    });

    return location.toObject();
  }

  async deleteLocation(id: string, context: Context) {
    const location = await LocationModel.findById(id);

    if (!location) {
      throw new GraphQLError("Location not found!", {
        extensions: {
          code: "NOT_FOUND",
          http: {
            status: 404,
          },
        },
      });
    }

    console.log(location.createdBy.toString(), context.user?._id);

    if (location.createdBy.toString() !== context.user?._id.toString()) {
      throw new GraphQLError("Unauthorized access.", {
        extensions: {
          code: "UNAUTHORIZED",
          http: {
            status: 401,
          },
        },
      });
    }

    return LocationModel.findByIdAndDelete(id);
  }
}

export default LocationService;
