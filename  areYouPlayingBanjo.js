function areYouPlayingBanjo(name) {
  return name.charAt(0).toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("susan"));
console.log(areYouPlayingBanjo("Robert"));
console.log(areYouPlayingBanjo("robert"));
