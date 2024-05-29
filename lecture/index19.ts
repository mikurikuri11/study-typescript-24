const foo = <T>(arg: T) => {
  return { value: arg };
}

const foo1 = foo<string>("");
const foo2 = foo<number[]>([1, 2, 4]);


// 暗黙的な型解決
const foo3 = foo(false);
const foo4 = foo(2);


const bar = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    return { value: arg };
  }
  return { value: arg };
}