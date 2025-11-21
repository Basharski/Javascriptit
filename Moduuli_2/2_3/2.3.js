


const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Enter dog ${i + 1}:`));
}

dogs.sort();
dogs.reverse();

let html = "<ul>";
for (let dog of dogs) {
  html += `<li>${dog}</li>`;
}
html += "</ul>";

document.body.innerHTML = html;
