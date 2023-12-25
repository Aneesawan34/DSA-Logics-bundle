let friends = [
  {
    name: "AA",
    books: ["aa", "aaa"],
    age: 21,
  },
  {
    name: "BB",
    books: ["bb", "bbb"],
    age: 31,
  },
  {
    name: "CC",
    books: ["cc", "ccc"],
    age: 41,
  },
  {
    name: "DD",
    books: ["dd", "ddd"],
    age: 51,
  },
  {
    name: "EE",
    books: ["ee", "eee"],
    age: 61,
  },
];

const dd = [];
friends.forEach((items) => {
  items.books.forEach((element) => {
    dd.push(element);
  });
});
console.log(dd);
// output
["aa", "aaa", "bb", "bbb", "cc", "ccc", "dd", "ddd", "ee", "eee"];
