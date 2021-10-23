const names: Array<string> = []; // string[] // 100% same
// name[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is done!');
    resolve(10);
  }, 2000);
});

// promise.then((data) => {
//   data.split(' ');
// });
