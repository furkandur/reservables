import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { DAYS } from "../../utils/enums";
import {
  IsArray,
  IsEnum,
  Length,
  MinLength,
  ValidateNested,
} from "class-validator";
import {
  IsStartBeforeEnd,
  IsTimeFormat,
  IsUniqueDays,
} from "../../utils/validators";
import { User } from "../User/schema";

@ObjectType()
export class OpenDay {
  @Field(() => DAYS)
  @prop({ enum: DAYS, required: true })
  day: DAYS;

  @Field(() => String)
  @prop({ required: true })
  startHour: string;

  @Field(() => String)
  @prop({ required: true })
  endHour: string;
}

@ObjectType()
export class Location {
  @Field(() => ID)
  _id: mongoose.Types.ObjectId;

  @Field(() => String)
  @prop({ required: true, unique: true })
  name: string;

  @Field(() => String, { nullable: true })
  @prop()
  description?: string;

  @Field(() => String)
  @prop({ required: true })
  address: string;

  @Field(() => [OpenDay])
  @prop({ type: () => [OpenDay], _id: false, default: [] })
  openDays: OpenDay[];

  @Field(() => User)
  @prop({ required: true, ref: () => User })
  createdBy: Ref<User>;
}

@InputType()
export class CreateLocationInput {
  @Field(() => String)
  @MinLength(3)
  name: string;

  @Field(() => String, { nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(() => String)
  @Length(20, 255)
  address: string;

  @Field(() => [OpenDayInput])
  @IsArray()
  @ValidateNested({ each: true })
  @IsUniqueDays()
  openDays: OpenDayInput[];
}

@InputType()
export class OpenDayInput {
  @Field(() => DAYS)
  @IsEnum(DAYS)
  day: DAYS;

  @Field(() => String)
  @IsTimeFormat()
  startHour: string;

  @Field(() => String)
  @IsTimeFormat()
  @IsStartBeforeEnd()
  endHour: string;
}

export const LocationModel = getModelForClass(Location);
