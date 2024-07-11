export function divCon(x: (string | number)[]): number {
  return x.reduce(
    (result: number, value: number | string) => {
      typeof value === "string"
        ? (result -= +value)
        : (result += value);

      return result;
    },
    0
  );
}
