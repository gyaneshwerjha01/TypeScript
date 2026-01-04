interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person = {
  name: "Gyaneshwer",
  age: 21,
  greet(text: string): void {
    console.log(`${text} ${this.name}`);
  },
};

// user.greet("Hi there, I am ");

interface Greetable {
  name: string;
  greet(text: string): void;
}

/*
class Person implements Greetable {
  constructor(public name: string) {}

  greet(text: string): void {
    console.log(`${text} ${this.name}`);
  }
}
*/
// const p1 = new Person("Gyaneshwer");
// p1.greet("Hi there I am ");

interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Named {
  constructor(public name: string) {}
}

let user1: Named = new Person("Gyaneshwer");
// user1.name = "Jha"; // error
