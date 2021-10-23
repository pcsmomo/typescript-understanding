# typescript-understanding

Understanding TypeScript by Maximilian Schwarzmüller

# Details

<details open> 
  <summary>Click to Contract/Expend</summary>

## Section 1: Getting Started

### 4. Installing & Using TypeScript

```sh
sudo npm install -g typescript
tsc using-ts.ts
```

### 8. Setting Up A Code Editor / IDE

TSLint : VS Extention

### 9. The Course Project Setup

```sh
npm init
npm install --save-dev lite-server
```

```js
"scripts" { "start": "lite-server" }
```

## Section 2: TypeScript Basics & Basic Types

### 12. TypeScript Types vs JavaScript Types

> Javascript uses "dynamic types" (resolved at runtime), \
> Typescript uses "static types" (set during development)

However, sometimes we need to check type on runtime like this,

```js
if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  throw new Error('Incorrect input!');
}
```

### 20. Working with Tuples

```js
role: [number, string];
role = [2, 'author'];
role.push('admin'); // push() is an exception. Asllowed from the tuple rules
```

### 22. The "any" Type

> If you really don't know which type it would be, you could use "any" with runtime type checking,\
> however, it'd be better to avoid use "any" if possible

### 32. The "unknown" Type

unknown is more restrictive than any

```js
let userInput: unknown; // is more restrictive than "any"
let userName: string;
userInput = 'Max';
// userName = userInput;  // type error

let userInputAny: any;
let userNameAny: string;
userNameAny = userInputAny; // no type error
```

### 33. The "never" Type

```js
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };\
}
```

### 35. Useful Resources & Links

[Official TypeScript Docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Section 3: The TypeScript Compiler (and its Configuration)

### 37. Using "Watch Mode"

```sh
tsc app.ts --watch
tsc app.ts -w
```

### 38. Compiling the Entire Project / Multiple Files

```sh
tsc --init
# it creates tsconfig.json

# now this command complies all *.ts
tsc
tsc --watch
```

### 39. Including & Excluding Files

```json
// tsconfig.json
{
  "exclude": [
    "node_modules" // would be the default
  ],
  "include": ["app.ts", "analytics.ts"], // If the same file declared here? "inlucde" first - and then "exclude"
  "files": ["app.ts"] // specific file. Not really useful
}
```

### 41. Understanding TypeScript Core Libs

if "lib": [] is declared, the compiler follows that specific rules.

```json
{
  // Default ES6 Rules
  "lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"]
}
```

### 43. Working with Source Maps

It is super useful when debugging mode.

When sourceMap is true, we can see .ts file on the Sources tab in devTool, and it's easy to debug (even including breakpoint)

```json
{
  "sourceMap": true
}
```

### 44. rootDir and outDir

```json
{
  "rootDir": "./src" /* Specify the root folder within your source files. */,
  "outDir": "./dist" /* Specify an output folder for all emitted files. */,
  "removeComments": true /* Disable emitting comments. */,
  "noEmit": true /* Disable emitting files from a compilation. */,
  "downlevelIteration": true /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
}
```

### 45. Stop Emitting Files on Compilation Errors

```json
{
  "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */
}
```

### 46. Strict Compilation

```json
{
  "strict": true /* Enable all strict type-checking options. */
  // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
  // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
  // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
  // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
  // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
}
```

### 47. Code Quality Options

```json
{
  // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
  // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
  // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
}
```

### 48. Debugging with Visual Studio Code

Setting up .vscode/launch.json

```json
{
  "sourceMap": true
}
```

### 50. Useful Resources & Links

- [tsconfig Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Config Docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [VS Code TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

## Section 4: Next-generation JavaScript & TypeScript

### 51. Module Introduction

[Next-gen JS Feature Table](https://kangax.github.io/compat-table/es6/)

## Section 5: Classes & Interfaces

### 64. Constructor Functions & The "this" Keyword

```js
// this "this" is a typescript thing to give the method a hint
// it won't be generated on app.js at all
describe(this: Department) {
  console.log('Department: ' + this.name);
}
```

### 65. private and "public" Access Modifiers

- Typescript provides "private", "public".
- Vanilla script provides "static" for public

[Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

### 71. Getters & Setters

Modern javascript has getter/setter feature, but not es5

### 78. Using Interfaces with Classes

interface and type are pretty similars

- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [Difference Between Interface and Abstract Class](https://stackoverflow.com/questions/50110844/what-is-the-difference-between-interface-and-abstract-class-in-typescript)

### 82. Interfaces as Function Types

```js
type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
```

### 84. Compiling Interfaces to JavaScript

Interface is only for typescript to help devlopers. \
There is nothing about interface in the app.js compiled.

### 87. Useful Resources & Links

- [More on (JS) Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [More on TS Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Section 6: Advanced Types

### 88. Module Introduction

1. Intersection Types
2. Type Guards
3. Discriminated Unions
4. Type Casting
5. Function Overloads

### 89. Intersection Types

1. For object type, _&_ will comebine types (spread)
2. For union types, _&_ will intersect types (shrink)

### 90. More on Type Guards

```js
if (typeof a === 'string' || typeof b === 'string') {
}
if ('privileges' in emp) {
}
if ('startDate' in emp) {
}
class Truck {}
if (vehicle instanceof Truck) {
}
// instanceof can be used for 'class' but not 'interface', in runtime there's no interface
```

### 92. Type Casting

```js
// way 1 to do type casting
// When you use react, this syntax would be confusing by react JSX syntax with brackets <>
const userInputElement = <HTMLInputElement>(document.getElementById('user-input'));  // </>

// way 2 to do type casting
const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// way 3.
// "!" can be used when expression in front of "!" will never yield "null"
// If you're not 100% sure, than you can use if statement
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

// way 4, userInputElement can be null
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'High there!';
}
```

### 93. Index Properties

It can be used when we don't know \
which property name we use, \
and how many properties it would have

```js
// prop cannot be boolean
[prop: string]: string;
```

### 94. Function Overloads

```js
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
```

### 95. Optional Chaining

```js
console.log(fetchedUserData?.job?.title);
```

### 96. Nullish Coalescing

'??' checks including empty strings "", unlike '||'

```js
// const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT';
```

### 99. Useful Resources & Links

[More on Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

## Section 8: Decorators

### 112. Module Introduction

1. What?
2. Generic Functions & Classes
3. Contraints
4. Special TypeScript Types

### 108. Generic Utility Types

```js
const courseGoal: Partial<CourseGoal> = {};
const names2: Readonly<string[]> = ['Max', 'Anna'];
```

### 109. Generic Types vs Union Types

- Generic Type can lock up a specific type
- Union Type is more flexible but sometimes it cannot constraint data type

### 111. Useful Resources & Links

[More on Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

### 113. A First Class Decorator

```json
{
  "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
  "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */
}
```

```js
// It is being created first before pers instance created.
function Logger(constructor: Function) {
```

### 115. Building More Useful Decorators

```js
// _ when I don't want to use it
return function (_: Function) {};
```

</details>
