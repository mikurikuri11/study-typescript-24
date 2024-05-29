type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};

export const foo = (value: any) => {
  if (isUserA(value)) {
    return value;
  }
  return value;
};

// 外部のAPIでは型がわからない
export const foo2 = async () => {
  const res = await fetch("");
  const json = await res.json();

  if (isUserA(json)) {
    return json.lang;
  }
};

const users: (UserA | UserB)[] = [
  { name: "田中", lang: "ja" },
  { name: "山田", lang: "ja" },
  { name: "ジョニー", lang: "en" },
];

// 型が追いついていない
const japanese = users.filter((user) => {
  return user.lang === "ja";
});

const japanese2 = users.filter(isUserA);
