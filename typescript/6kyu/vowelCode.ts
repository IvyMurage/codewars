// turn vowels into numbers
const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
export function encode(string: string): string {
  return string
    .split("")
    .map((character) =>
      character in vowels
        ? vowels[character as keyof typeof vowels]
        : character
    )
    .join("");
}

// turn numbers back into vowels
export function decode(string: string): string {
  return string
    .split("")
    .map((character) =>
      !isNaN(Number(character))
        ? Object.keys(vowels).find(
            (key) =>
              vowels[key as keyof typeof vowels] ===
              +character
          ) || character
        : character
    )
    .join("");
}
