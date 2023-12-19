import { data } from "./main.js";
let myArray = data;

let input = "11";
if (input < myArray.length && parseInt(input)) {
  console.warn(`Your input value is ${myArray[input]}`);
} else {
  console.warn("please Enter valid input");
}
