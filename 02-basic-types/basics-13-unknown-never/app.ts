let userInput: unknown; // is more restrictive than "any"
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;  // type error

let userInputAny: any;
let userNameAny: string;
userNameAny = userInputAny;

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
