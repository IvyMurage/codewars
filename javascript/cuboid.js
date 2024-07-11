class Cuboid {
  // TODO: Program Me
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  //2 (lw + wh + lh)
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.length * this.height)
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
  // Don't forget to make a call to super ;)
}
