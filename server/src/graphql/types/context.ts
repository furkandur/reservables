import { IncomingMessage, ServerResponse } from "http";
import { User } from "../User/schema";
import { BaseContext } from "@apollo/server";

interface Context {
  req: IncomingMessage;
  res: ServerResponse;
  user: User | null;
}

export default Context;
