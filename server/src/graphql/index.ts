import LocationResolver from "./Location/resolver";
import UserResolver from "./User/resolver";

export const resolvers = [UserResolver, LocationResolver] as const;
