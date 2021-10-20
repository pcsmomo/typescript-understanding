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

</details>
