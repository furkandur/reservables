import { AuthChecker } from "type-graphql";
import Context from "../graphql/types/context";

const authChecker: AuthChecker<Context> = ({ context }) => {
  // Check if the user is authenticated
  if (context.user) {
    return true;
  }

  // If no user is found in context, return false
  return false;
};

export default authChecker;
