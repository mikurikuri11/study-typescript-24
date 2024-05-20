// export type User = {
//   name: string;
//   [key: string]: string | number | undefined;
// };

// const user: User = {
//   name: "しまぶー",
//   age: 20,
//   account: "shimabu_it",
//   job: "Software Engineer",
// };

// user.firstName

export type User = {
  name: string;
} & OptionalPersonalData;

// type Foo = "height" | "weight";

type Foo = {
  height: any;
  weight: any;
  realName: string;
}

type PersonalData = {
  // height: number;
  // weight: number;
  // [K in Foo]: number;
  [K in keyof Foo]: number;
}

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K]
}

type RequiredPersonalData = {
  [K in keyof PersonalData]-?: PersonalData[K]
}

const user: User = {
  name: "しまぶー",
  height: 174,
  weight: 60
};

