export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateLocationInput = {
  address: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openDays: Array<OpenDayInput>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

/** Days of Week */
export type Days =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

export type Location = {
  __typename?: 'Location';
  _id: Scalars['ID']['output'];
  address: Scalars['String']['output'];
  createdBy: User;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  openDays: Array<OpenDay>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocation: Location;
  deleteLocation?: Maybe<Location>;
  login: Scalars['String']['output'];
  signup: Scalars['String']['output'];
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationDeleteLocationArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  input: CreateUserInput;
};

export type OpenDay = {
  __typename?: 'OpenDay';
  day: Days;
  endHour: Scalars['String']['output'];
  startHour: Scalars['String']['output'];
};

export type OpenDayInput = {
  day: Days;
  endHour: Scalars['String']['input'];
  startHour: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryLocationArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  surname: Scalars['String']['output'];
};

export type AllLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLocationsQuery = { __typename?: 'Query', locations?: Array<{ __typename?: 'Location', _id: string, name: string, description?: string | null, address: string, openDays: Array<{ __typename?: 'OpenDay', day: Days, startHour: string, endHour: string }>, createdBy: { __typename?: 'User', _id: string, name: string, surname: string, email: string } }> | null };
