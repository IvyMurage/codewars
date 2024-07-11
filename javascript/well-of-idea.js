function well(x) {
  return x.every((idea) => idea === "bad")
    ? "Fail"
    : x.filter((idea) => idea === "good").length <= 2
    ? "Publish"
    : "I smell a series!";
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
