// ****************************
// 6. Function overloads
type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2;

// function add(a: number): number;
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add(1, 5);
// const result = add('Max', ' Schwarz') as string;
const result = add2('Max', ' Schwarz');
result.split(' ');
