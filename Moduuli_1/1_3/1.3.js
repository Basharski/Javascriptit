const a = Number(prompt("Enter first integer:"));
const b = Number(prompt("Enter second integer:"));
const c = Number(prompt("Enter third integer:"));

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.body.innerHTML = `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;
