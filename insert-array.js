let data = [40, 30, 12, 25];

let insertValue = 22;
let insertPosition = 1;
for (let index = data.length - 1; index >= insertPosition; index--) {
  data[index + 1] = data[index];
  if (index === insertPosition) {
    data[index] = insertValue;
  }
}
console.warn(data);
