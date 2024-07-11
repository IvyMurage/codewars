class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }

  get volume() {
    return Math.pow(this.length, 3);
  }

  set surfaceArea(surfaceArea) {
    this.length = Math.sqrt(surfaceArea / 6);
  }

  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
}
let cube = new Cube(3);
console.log(cube.surfaceArea);
console.log(cube.volume);
cube.surfaceArea = 54;
console.log(cube.length);
console.log(cube.volume);
cube.volume = 27;
console.log(cube.length);
console.log(cube.surfaceArea);
