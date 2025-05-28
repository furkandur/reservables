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
    return await LocationModel.create({
      ...input,
      createdBy: context.user?._id,
    });
  }
}

export default LocationService;
