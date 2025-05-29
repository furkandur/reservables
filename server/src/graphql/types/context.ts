import { IncomingMessage, ServerResponse } from "http";
import { User } from "../User/schema";
import { UserDataLoader } from "../User/loader";

interface Context {
  req: IncomingMessage;
  res: ServerResponse;
  user: User | null;
  dataloaders: {
    userLoader: UserDataLoader;
  };
}

export default Context;
