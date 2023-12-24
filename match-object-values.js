const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12, f: 32 };
const input2 = { a: 2, e: 12, f: 7, d: 10 };
// get same key with same valus and add them in seperate object
// [{d: 10},{e: 12}]

const result = {};
for (const key in input1) {
  if (input1[key] == input2[key]) {
    result[key] = input1[key];
  }
}
console.log(result);
