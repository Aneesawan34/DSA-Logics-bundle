let data = [9, 45, 2, 8, 25, 23, 7, 78, 0, 11, 41, 77];

let input = "11";
if (input < data.length && parseInt(input)) {
  console.warn(`Your input value is ${data[input]}`);
} else {
  console.warn("please Enter valid input");
}
