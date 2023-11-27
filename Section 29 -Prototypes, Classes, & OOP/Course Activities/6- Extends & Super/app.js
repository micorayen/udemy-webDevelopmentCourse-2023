//Topic: Extends and Super keywords ================================================================

// Betweeen Classes Cats & Dogs (lots of duplicated codes)
// class Dogs {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eatFood() {
//     return `${this.name} is eating`;
//   }

//   bark() {
//     return "Aw, Aw, Aw!!";
//   }
// }

// class Cats {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eatFood() {
//     return `${this.name} is eating`;
//   }
//   meow() {
//     return "Meow, Meow, Meow!!";
//   }
// }

// ===================================================
class Pets {
  constructor(name, age) {
    console.log("In pet constructor!");
    this.name = name;
    this.age = age;
  }

  eatFood() {
    return `${this.name} is eating`;
  }
}

class Dogs extends Pets {
  bark() {
    return "Aw, Aw, Aw!!";
  }
}

class Cats extends Pets {
  constructor(name, age, livesLeft = 9) {
    console.log("In cat constructor!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "Meow, Meow, Meow!!";
  }
}

// const dog1 = new Dogs("Luna", 6);
// const cat1 = new Cats("Mingming", 9);
