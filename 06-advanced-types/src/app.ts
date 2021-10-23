// ****************************
// 4. type casting
// const paragraph = document.getElementById('message-output');

// way 1 to do type casting
// When you use react, this syntax would be confusing by react JSX syntax with brackets <>
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );
// userInputElement.value = 'High there!';

// way 2 to do type casting
// const userInputElement = document.getElementById(
//   'user-input'
// ) as HTMLInputElement;
// userInputElement.value = 'High there!';

// const userInputElement = document.getElementById('user-input')!;
// "!" can be used when expression in front of "!" will never yield "null"
// If you're not 100% sure, than you can use if statement
// way 3.
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
// userInputElement.value = 'High there!';

// way 4, userInputElement can be null
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'High there!';
}
