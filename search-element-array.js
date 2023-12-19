import { data } from "./main.js";

var myArray = data;
let find = 40;
let indexOf = undefined;

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  if (element === find) {
    indexOf = index;
    break;
  }
}
console.log("indexOf: ", indexOf);
