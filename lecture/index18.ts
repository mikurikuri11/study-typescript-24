export type Foo<T> = {
  value: T;
};

const foo: Foo<string> = {
  value: "",
};

const foo2: Foo<number> = {
  value: 2,
};

const foo3: Foo<string[]> = {
  value: ["hello", "world"],
};

export type User<T> = {
  name: string;
  state: T;
};

type Japanese = User<"東京都" | "大阪府">;
type American = User<"CA" | "SD">;

const user1: Japanese = {
  name: "田中",
  state: "東京都",
}

const user2: American = {
  name: "Mike",
  state: "CA",
}

export type Bar<T = string> = {
  value: T;
};

const bar: Bar = {
  value: ""
}

const bar2: Bar<number> = {
  value: 2
}

export type Baz<T extends string> = {
  value: T;
};

const baz: Baz<string> = {
  value: "2"
}