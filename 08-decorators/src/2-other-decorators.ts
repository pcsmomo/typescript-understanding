// ****************************
// 5. Different Decorators
// Property decorator, Accessor decorator
// Method decorator, Parameter decorator

// Property decorator!
function Log(target: any, propertyName: string | Symbol) {
  console.log('== Log1: Property decorator! ==');
  console.log(target, propertyName);
}

// Accessor decorator!
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('== Log2: Accessor decorator! ==');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorator!
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('== Log3: Method decorator! ==');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorator!
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('== Log4: Parameter decorator! ==');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  // get price() {
  //   return this._price;
  // }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
