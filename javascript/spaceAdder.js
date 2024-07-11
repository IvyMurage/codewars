function solution(string) {
  return [...string]
    .map((char) =>
      char === char.toUpperCase() ? " " + char : char
    )
    .join("");
}
