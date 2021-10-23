// ****************************
// 7. Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

// in javascript
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

// ****************************
// 8. Nullish Coalescing

// const userInput = null;
// const userInput = '';
// const storedData = userInput || 'DEFAULT';

const userInput = undefined;
// const userInput = '';
// const userInput = null;
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
