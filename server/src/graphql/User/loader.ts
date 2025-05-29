import mongoose from "mongoose";
import { User, UserModel } from "./schema";
import DataLoader from "dataloader";

const batchUsers = async (
  userIds: readonly string[]
): Promise<(User | Error)[]> => {
  try {
    const objectIds = [...new Set(userIds)].map(
      (id) => new mongoose.Types.ObjectId(id)
    );
    const users = await UserModel.find({ _id: { $in: objectIds } }).lean();
    console.log(users);
    const userMap = new Map(users.map((user) => [user._id.toString(), user]));
    return userIds.map(
      (id) => userMap.get(id) || new Error(`User not found: ${id}`)
    );
  } catch (error) {
    return userIds.map(() => error as Error);
  }
};

export const createUserDataLoader = () =>
  new DataLoader(batchUsers, {
    cache: true,
  });

export type UserDataLoader = ReturnType<typeof createUserDataLoader>;
