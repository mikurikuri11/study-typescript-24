export const foo = <T, K, U>(foo: T, bar: K, baz: U) => {
  return {};
};

export const foo2 = <
  T extends string,
  K extends number,
  U extends boolean = false
>(
  foo: T,
  bar: K,
  baz: U
) => {
  return {};
};

type Obj = {
  a: number;
  b: string;
};

type Foo = Obj["a"];

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
  obj[key] = value;
};

const obj = {
  foo: "1",
  bar: 2,
  baz: false,
};

const hoge = getProperty(obj, "baz");
setProperty(obj, "bar", 100);

const map = [1, 2, 3].map((v) => v);
