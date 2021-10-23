// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: 'Max' }, { age: 30 });
// mergeObj.age; // Type script wouldn't know about age

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: 'Max', hobbies: ['Sports'] },
//   { age: 30 }
// );
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
