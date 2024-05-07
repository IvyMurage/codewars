function dnaStrand(dna) {
  return dna
    .split("")
    .map((char) =>
      char === "A"
        ? "T"
        : char === "T"
        ? "A"
        : char === "C"
        ? "G"
        : char === "G"
        ? "C"
        : char
    )
    .join("");
}
