import { data } from "./main.js";

var myArray = data;
let position = 1;
console.log("myArray before", myArray);
if (position > myArray.length - 1) {
  console.error("index is not exist");
  return null;
}
for (let index = position; index < myArray.length; index++) {
  myArray[index] = myArray[index + 1];
  const element = myArray[index];
}
myArray.length = myArray.length - 1;
console.log("myArray after", myArray);
