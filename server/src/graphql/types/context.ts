import { IncomingMessage, ServerResponse } from "http";
import { User } from "../User/schema";
import { BaseContext } from "@apollo/server";

interface Context {
  user: User | null;
}

export default Context;
