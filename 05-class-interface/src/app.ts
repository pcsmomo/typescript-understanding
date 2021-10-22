// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// type Greetable = {
//   readonly name: string;

//   greet(phrase: string): void;
// };

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// class Person implements Greetable, Named {
class Person implements Greetable {
  name?: string;
  age = 30;

  // constructor(n: string = ' ') {
  constructor(n?: string) {
    // if n is not provided, it will be undefined
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// let user1: Person;
let user1: Greetable;

// user1 = new Person('Max');
user1 = new Person();
// user1.name = 'Manu'; // error

user1.greet('Hi there - I am');
console.log(user1);
