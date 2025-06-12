import { GraphQLError } from "graphql";
import Context from "../types/context";
import { CreateReservableInput, Reservable, ReservableModel } from "./schema";

class ReservableService {
  async getReservable() {
    return ReservableModel.find().lean();
  }

  async getReservableById(id: string) {
    return ReservableModel.findById(id);
  }

  async createReservable(input: CreateReservableInput, context: Context) {
    const reservable = await ReservableModel.create({
      ...input,
      createdBy: context.user?._id,
    });

    return reservable.toObject();
  }

  async deleteReservable(id: string, context: Context) {
    const reservable = await ReservableModel.findById(id);

    if (!reservable) {
      throw new GraphQLError("Reservable not found!", {
        extensions: {
          code: "NOT_FOUND",
          http: {
            status: 404,
          },
        },
      });
    }

    console.log(reservable.createdBy.toString(), context.user?._id);

    if (reservable.createdBy.toString() !== context.user?._id.toString()) {
      throw new GraphQLError("Unauthorized access.", {
        extensions: {
          code: "UNAUTHORIZED",
          http: {
            status: 401,
          },
        },
      });
    }

    return ReservableModel.findByIdAndDelete(id);
  }
}

export default ReservableService;
