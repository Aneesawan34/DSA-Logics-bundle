import { data } from "./main.js";

let myArray = data;

let insertValue = 22;
let insertPosition = 1;
for (let index = myArray.length - 1; index >= insertPosition; index--) {
  myArray[index + 1] = myArray[index];
  if (index === insertPosition) {
    myArray[index] = insertValue;
  }
}
console.warn("myArray: ", myArray);
