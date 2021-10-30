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

## Section 8: Decorators

> Decorator is triggered when the class is defined\
> Not like event listeners

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

### 116. Adding Multiple Decorators

The order of executing

1. Logger
2. WithTempalte
3. WithTempalte return function
4. Logger return function

### 120. Returning (and changing) a Class in a Class Decorator

> the inner constructor will add those extra logic when the class is instantiated

### 121. Other Decorator Return Types

[More on Property Descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### 126. Wrap Up

[class-validator - Github](https://github.com/typestack/class-validator)

### 127. Useful Resources & Links

[More on Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

## Section 9: Practice Time! Let's build a Drag & Drop Project

### 130. DOM Element Selection & OOP Rendering

- [document.importNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)
- [Element.insertAdjacentElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)

```js
document.importNode(this.templateElement.content, true);
this.hostElement.insertAdjacentElement('afterbegin', this.element);
```

### 134. Creating a Re-Usable Validation Functionality

```js
// '!= null' means not (null and undefined)
validatableInput.minLength != null;
```

### 136. Managing Application State with Singletons

- Singleton pattern
- **Subscription pattern** (!interesting)

### 142. Utilizing Interfaces to Implement Drag & Drop

DragEvent type is included the tsconfig lib

```json
{
  "lib": ["dom", "es6", "dom.iterable", "scripthost"]
}
```

### 144. Adding a Droppable Area

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [event.dataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
- [DataTransfer.setData()](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)
- [DataTransfer.effectAllowed](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed)

```js
dragStartHandler(event: DragEvent) {
  event.dataTransfer!.setData('text/plain', this.project.id);
  event.dataTransfer!.effectAllowed = 'move'
}
```

### 147. Useful Resources & Links

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

## Section 10: Modules & Namespaces

### 149. Writing Module Code - Your Options

1. Namespace & File Bundling
   1. Use "namespace" code syntax to group code
   2. Per-file or bundled compilation is possible (less imports to manage)
2. ES6 Imports/Exports
   1. Use ES6 import/export syntax
   2. Per-file compilation but single `<script> import`
   3. Bundling via third-party tools (e.g. Webpack) is possible!

### 150. Working with Namespaces

1. namespace is a typescript feature
   [typescript Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
2. /// (triple slashes)
   ```js
   // Triple Slashes (///) is a typescript special syntax
   /// <reference path="drag-drop-interfaces.ts" />
   ```
3. change tsconfig.json
   ```json
   {
     "module": "amd" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
     "outFile": "./dist/bundle.js" /* Concatenate and emit output to single file. */
   }
   ```
4. change index.html to link ./dist/bundle.js

### 154. Using ES Modules

1. Remove all namespaces
2. Use Import/Export
3. Import 'js' not 'ts'
4. tsconfig.json
   ```json
   {
     "module": "ES2015" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
     // "outFile": "./dist/bundle.js" /* Concatenate and emit output to single file. */,
   }
   ```

### 156. How Does Code In Modules Execute?

In Module type, a javascript file runs only once even it was imported several times

### 158. Useful Resources & Links

- [JavaScript Modules (Overview)](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
- [JavaScript modules - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Section 11: Using Webpack with TypeScript

### 160. What is Webpack & Why do we need it?

When we have several javascript files in our project, \
There will be as many http requests as the javascript files \
And it costs.\

Webpack is a bundling & "Build Orchestration" Tool

[Webpack DOC](https://webpack.js.org/concepts/)

|                "Normal" Setup                |                   With Webpack                   |
| :------------------------------------------: | :----------------------------------------------: |
| Multiple .ts files & imports (Http requests) |       Code bundles, less imports required        |
| Unoptimized code (not as small as possible)  | Optimized (minified) code, less code to download |
|     "External" development server needed     |       More build steps can be added easily       |

### 161. Installing Webpack & Important Dependencies

```sh
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
```

### 162. Adding Entry & Output Configuration

1. Modify tsconfig.json
   ```json
   {
     "target": "es6",
     "module": "ES2015",
     "outDir": "./dist"
     // "rootDir": "./src"
     // Webpack will take care of "rootDir"
   }
   ```
2. Create webpack.config.js
3. Remove ".js" from all import statements
4. Start configuring webpack.config.js
   - continue to next lecture

### 163. Adding TypeScript Support with the ts-loader Package

4. Configure webpack.config.js
   ```json
   {
     "devtool": "inline-source-map",
     // It tells webpack, there will be generated source maps already,
     // So it should extract and wire up correctly to the bundle.js.
     // So we get such as a bundle, we still have a great development experience.
     // **Means, we can see the original source code in the source tab, devTools.**
     "module": {},
     "resolve": {}
   }
   ```
5. Make sure sourceMap: true on tsconfig.json
   ```json
   {
     "sourceMap": true /* Generates corresponding '.map' file. */
   }
   ```
6. Modify index.html to import `dist/bundle.js`
7. Add "build" script in package.json
   - `"build": "webpack"`
8. Build and start!
   - `npm run build`
   - `npm start`

### 164. Finishing the Setup & Adding webpack-dev-server

1. Modify start script
   - `"start": "webpack-dev-server",`
2. `npm start`
   - In the webpack dev server mode, the bundle is generated in memory only,
   - Basically it doens't read from file system.
3. Modify webpack.config.js
   - `publicPath: 'dist',`

> It's not working on my local as it couldn't load index.html \
> I guess with the recent version of webpack, I need to configure about index.html

### Fix up

```sh
npm install --save-dev html-webpack-plugin
```

### 165. Adding a Production Workflow

- module and rules are appiled per **file level**
- plugins are applied **general work flow**

```sh
npm install --save-dev clean-webpack-plugin
```

```js
{
  "plugins": [new CleanPlugin.CleanWebpackPlugin()]
}
```

## Section 12: 3rd Party Libraries & TypeScript

### 168. Module Introduction

1. "Normal" Libraries & Using them with Typescript
   - Additionally install `@types/lodash`
2. TypeScript-specific Libraries
   1. No Types Needed - simply install the library
   2. Typescript-embracing - simply install and use the typescript features

### Fix up

```sh
npm install --save-dev html-webpack-plugin
```

### 169. Using JavaScript (!) Libraries with TypeScript

```sh
npm i --save lodash
```

- [npm lodash](https://www.npmjs.com/package/@types/lodash)

- [DefinitelyTyped - lodash](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash)
  - \*.d.ts : "d"ecoration files
- [@types - github](https://github.com/DefinitelyTyped)

We should install @types/\*, when we work with 3rd-party library written in javascript

```sh
npm i --save-dev @types/lodash
```

### 171. No Types Needed: class-transformer

[class-transformer](https://github.com/typestack/class-transformer)

```sh
npm install --save class-transformer
npm install --save reflect-metadata
```

### 172. TypeScript-embracing: class-validator

[class-validator](https://github.com/typestack/class-validator)

```sh
npm install class-validator --save
```

```json
// tsconfig.json
{
  "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */
}
```

## Section 13: Time to Practice! Let's build a "Select & Share a Place" App (incl. Google Maps)

### 183. Module Introduction

```sh
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
npm install --save-dev html-webpack-plugin
```

### 178. Setting Up a Google API Key

1. [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
2. Click "Get Started" Button on the top-right
3. Get the API KEY

### 179. Using Axios to Fetch Coordinates for an Entered Address

```sh
npm install --save axios
```

### 180. Rendering a Map with Google Maps (incl. Types!)

[Google Map JavaScript API](https://developers.google.com/maps/documentation/javascript/overview?authuser=1)

```sh
npm install --save-dev @types/google.maps
```

## Section 14: React.js & TypeScript

### 184. Setting Up a React + TypeScript Project

[Create React App with TypeScript](https://create-react-app.dev/docs/adding-typescript/)

```sh
npx create-react-app . --template typescript
```

### 189. Working with State & Types

```js
// This cannot guarantee the todos is the latest one.
// setTodos([...todos, { id: Math.random().toString(), text: text }]);
setTodos((prevTodos) => [
  ...prevTodos,
  { id: Math.random().toString(), text: text },
]);
```

### 191. More Props & State Work

```js
// in the leucture
<button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
// my usual pattern
<button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
```

> Is there any performence difference?\
> A Comment from Jost, Teaching Assistant said that both are equivalent.

### 193. Types for other React Features (e.g. Redux or Routing)

- [Redux with TypeScript](https://redux.js.org/usage/usage-with-typescript)
- React Router Dom with TypeScript
  - It doesn't provide built-in typescript decorators
  - `npm install --save-dev @types/react-router-dom`

### 195. Useful Resources & Links

- [Official React Docs](https://reactjs.org/docs/getting-started.html)
- [More React Resources](https://academind.com/learn/react/)
- [create-react-app + TypeScript Docs](https://create-react-app.dev/docs/adding-typescript/)

## Section 15: Node.js + Express & TypeScript

### 197. Executing TypeScript Code with Node.js

We could use ts-node for development but it is ideal for production \
[ts-node - Github](https://github.com/TypeStrong/ts-node)

So we will go with only typescript compiler and vanila javascript.

### 198. Setting up a Project

```sh
npm init
tsc --init
```

```json
// tsconfig.json
{
  "target": "ES2018" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
  "module": "commonjs" /* Specify what module code is generated. */,
  "rootDir": "./src" /* Specify the root folder within your source files. */,
  "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,
  "outDir": "./dist" /* Specify an output folder for all emitted files. */
}
```

```sh
npm install --save express
npm install --save-dev nodemon
```

</details>
