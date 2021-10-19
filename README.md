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

### 21. Working with Enums

```js
role: [number, string];
role = [2, 'author'];
role.push('admin'); // push() is an exception. Asllowed from the tuple rules
```

</details>
