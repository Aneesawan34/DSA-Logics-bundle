fetchData()
  .then(function (result) {
    console.log(`first ${result}`);
    return "More data";
  })
  .then(function (moreData) {
    console.log(`second ${moreData}`);
    return "Even more data";
  })
  .then(function (evenMoreData) {
    console.log(`third ${evenMoreData}`);
    return "Even Even more data";
  })
  .then(function (evenevenMoreData) {
    console.log(`four ${evenevenMoreData}`);
  })
  .catch(function (error) {
    console.error(error);
  });

function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulating an asynchronous operation
    setTimeout(function () {
      // Resolving the promise with some data
      resolve("Data fetched");
    }, 1000);
  });
}
