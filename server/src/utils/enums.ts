import { registerEnumType } from "type-graphql";

export enum DAYS {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

registerEnumType(DAYS, {
  name: "DAYS",
  description: "Days of Week",
});
