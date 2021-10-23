// ****************************
// 1. A First Class Decorator
// It is being created first before pers instance created.
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person1 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers1 = new Person1();
console.log(pers1);
console.log('******************************');

// ****************************
// 2. Working with Decorator Factories
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2('LOGGING - PERSON')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers2 = new Person2();
console.log(pers2);
console.log('******************************');

// ****************************
// 3. Building More Useful Decorators

function WithTemplate(template: string, hookId: string) {
  // _ when I don't want to use it
  // return function (_: Function) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person3 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers3 = new Person3();
console.log(pers3);
console.log('******************************');
