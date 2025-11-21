const numbers = [];
let input;

do {
  input = Number(prompt("Enter a number (0 to stop):"));
  if (input !== 0) numbers.push(input);
} while (input !== 0);

numbers.sort((a, b) => b - a);

for (let n of numbers) {
  console.log(n);
}
