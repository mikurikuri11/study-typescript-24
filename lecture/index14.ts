export const color = "red" as const;

let x = color;

const theme = {
  color: "red",
  backgroundColor: "blue"
} as const;



export const PATH = {
  INDEX: '/',
  LOGIN: '/login'
} as const;


export function getFirstLetter(str?: string) {
  if (!str) return;
  return str.charAt(0);
}

export function getFirstLetter2(str?: number) {
  if (!str) return;
  return (str as unknown as string).charAt(0);
}

