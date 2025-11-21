const count = Number(prompt("Enter number of participants:"));
const participants = [];

for (let i = 0; i < count; i++) {
  participants.push(prompt(`Enter name ${i + 1}:`));
}

participants.sort();

let html = "<ol>";
for (let name of participants) {
  html += `<li>${name}</li>`;
}
html += "</ol>";

document.body.innerHTML = html;
