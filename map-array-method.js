var myArray = [40, 30, 12, 25];

Array.prototype.myMap = function (myCallBack) {
  let myNewArray = [];
  for (let index = 0; index < this.length; index++) {
    myNewArray.push(myCallBack(this[index], index, this));
  }
  return myNewArray;
};

console.log(
  "myArray: ",
  myArray.myMap(function (item) {
    return item * 2;
  })
);
