let animal = {
  eat: true,
  sleep: false,
  eyes: 2,
  move() {
    return "I can walk";
  }
};

let rabbit = {
  name: "Петя",
  sound: "rrrrrrr",
  __proto__: animal
};

let snake = {
  name: "Игорь",
  sound: "tssss",
  __proto__: animal
};

let dog = {
  name: "Рэкс",
  move() {
    return false;
  },
  __proto__: animal
};

let digitalDog = {
  name: "Филя",
  eat: false,
  __proto__: dog
};

function Rabbit(name) {
  this.name = name;
  this.sound = "rrrrrrrr";
  this.eyes = 2;
}

Rabbit.prototype = animal;

let myRabbit = new Rabbit("Петя");
let newRabbit = new Rabbit("Сережа");
let newRabbit1 = new Rabbit("Nick");
let newRabbit2 = new Rabbit("Олег");
let newRabbit3 = new Rabbit("Влад");

console.log(rabbit);
console.log(newRabbit);
console.log(newRabbit1);
console.log(newRabbit2);
console.log(newRabbit3);

function Storage() {
  this.setItem = function(name, value) {
    let result = localStorage.setItem(name, value);

    return result ? result : "Not found";
  };
  this.getItem = function() {
    let result = localStorage.getItem(name);

    return result;
  };
}

let storage = new Storage();

storage.setItem("user", "Vlad");
