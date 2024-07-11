class Dog {
  constructor(
    name,
    age,
    gender,
    species,
    size,
    master,
    loyal
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dog {
  constructor(
    name,
    age,
    gender,
    master,
    species = "Labrador",
    size = "Large",
    loyal = true
  ) {
    super(name, age, gender, species, size, master, loyal);
  }
}
