import ReservableResolver from "./Reservable/resolver";
import UserResolver from "./User/resolver";

export const resolvers = [UserResolver, ReservableResolver] as const;
