const numbers = [];
let input;

while (true) {
  input = Number(prompt("Enter a number:"));
  if (numbers.includes(input)) break;
  numbers.push(input);
}

numbers.sort((a, b) => a - b);

for (let n of numbers) {
  console.log(n);
}
