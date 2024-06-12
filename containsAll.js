Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return a.every((num) => this.includes(num));
  },
});
