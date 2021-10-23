// ****************************
// 5. index properties
// More flexible for type checking
// We don't know
// 1. which property name we use
// 2. how many properties it would have
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  // id: string;
  [prop: string]: string;
}

const errBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
