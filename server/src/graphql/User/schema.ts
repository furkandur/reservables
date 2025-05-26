import { getModelForClass, pre, prop } from "@typegoose/typegoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(this.password, salt);

  this.password = hashedPassword;
})
@ObjectType()
export class User {
  @Field(() => ID)
  _id: mongoose.Types.ObjectId;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => String)
  @prop({ required: true })
  surname: string;

  @Field(() => String)
  @prop({ required: true, unique: true })
  email: string;

  @Field(() => String)
  @prop({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User);

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  surname: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, {
    message: "Password must be at least 6 characters long",
  })
  @MaxLength(20, {
    message: "Password must be at most 20 characters long",
  })
  @Field(() => String)
  password: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
