let changedVal = 100;

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1; // shallow copy
// let arr2 = [...arr1];  // deep copy
// let arr2 = Object.assign([], arr1);  // deep copy
arr2[2] = changedVal;

// console.log(arr1);
// console.log(arr2);

let obj1 = {
  myName: "Anis",
  myId: 2,
};
let obj2 = obj1; // shallow copy
// let obj2 = { ...obj1 };  // deep copy
// let obj2 = Object.assign({}, obj1); // deep copy
obj2.myId = changedVal;

// console.log(obj1);
// console.log(obj2);

// ************ how to deep nested copy ***************

let students = [
  {
    id: 21,
    name: "AAA",
    age: 25,
  },
  {
    id: 22,
    name: "BBB",
    age: 35,
  },
  {
    id: 23,
    name: "CCC",
    age: 45,
  },
];

let copyStudnets = students; // shallow copy
// let copyStudnets = [...students]; // deep copy
// let copyStudnets = Object.assign([], students); // deep copy (but it wa not work in nested case so we use stringify)

// let copyStudnets = JSON.parse(JSON.stringify(students));

copyStudnets[0].age = changedVal;
console.log(students);
console.log(copyStudnets);
