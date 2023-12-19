import { data } from "./main.js";

let myArray = data;
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray.length; j++) {
    if (myArray[j] > myArray[j + 1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}
console.warn("myArray: ", myArray);
