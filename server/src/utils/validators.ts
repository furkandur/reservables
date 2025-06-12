import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { OpenDayInput } from "../graphql/Reservable/schema";

export function IsUniqueDays(validationOptions?: ValidationOptions) {
  return function (Object: Object, propertyName: string) {
    registerDecorator({
      name: "isUniqueDays",
      target: Object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(openDays: OpenDayInput[], args: ValidationArguments) {
          if (!Array.isArray(openDays)) return false;
          const seen = new Set();
          for (const openDay of openDays) {
            if (seen.has(openDay.day)) {
              return false;
            }
            seen.add(openDay.day);
          }
          return true;
        },
        defaultMessage: (args: ValidationArguments) => {
          return "Days must be unique";
        },
      },
    });
  };
}

export function IsTimeFormat(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isTimeFormat",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return /^\d{2}:\d{2}$/.test(value) && isValidTime(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be valid time format (HH:mm).`;
        },
      },
    });
  };
}

function isValidTime(time: string): boolean {
  const [hour, minute] = time.split(":").map(Number);
  return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
}

export function IsStartBeforeEnd(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isStartBeforeEnd",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const obj = args.object as any;
          if (!obj.startHour || !obj.endHour) return true;
          return toMinutes(obj.startHour) < toMinutes(obj.endHour);
        },
        defaultMessage(args: ValidationArguments) {
          return `start hour, must be before end hour.`;
        },
      },
    });
  };
}

function toMinutes(time: string): number {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}
