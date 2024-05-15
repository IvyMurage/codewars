String.prototype.formatWith = function () {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp("\\{" + i + "\\}", "gi");
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

console.log(
  "Hello {0}. This {1} is bring a {2} to work day".formatWith(
    "world"
  )
);
