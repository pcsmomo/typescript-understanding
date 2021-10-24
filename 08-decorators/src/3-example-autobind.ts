// ****************************
// 7. Example: Creating an "Autobind" Decorator

// function Autobind(target:any, methodName: string, descriptor: PropertyDescriptor) {
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  console.log(descriptor);
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  console.log(adjDescriptor);
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
// p.showMessage();

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);
