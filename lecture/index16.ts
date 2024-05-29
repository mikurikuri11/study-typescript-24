export const foo = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value;
  }
  return value;
};

export const bar = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value;
  }
  return value;
};

export const bar2 = (value?: string) => {
  if (!value) {
    return value; // 空文字かundefined
  }
  return value;
};

type UserA = { name: string };
type UserB = { name: string; nickName: string };

export const bar3 = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value;
  }
  return value;
};

type UserC = { name: string; lang: "ja" };
type UserD = { name: string; lang: "en" };
type UserE = { name: string; lang: "fr" };

export const bar4 = (value: UserC | UserD) => {
  if (value.lang === "ja") {
    return value;
  }
  return value;
};

export const bar5 = (value: UserC | UserD | UserE) => {
  switch (value.lang) {
    case "ja": {
      return value;
    }
    case "en": {
      return value;
    }
    case "fr": {
      return value;
    }
    default: {
      // never型は、到達しないという意味
      // エラーを書くことも多い
      // throw Error("lang is not defined")
      return value;
    }
  }
};
