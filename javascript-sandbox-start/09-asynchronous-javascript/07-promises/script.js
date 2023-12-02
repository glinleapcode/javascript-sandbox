const promise = new Promise((resolve, reject) => {
  // simulate doing some async task
  const success = Math.random() > 0.5;
  setTimeout(() => {
    if (success) {
      resolve({ name: "John", title: "CEO" });
    } else {
      reject("Something wrong and I can not get the data!");
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log("successfully get the data", user);
  })
  .catch((err) => console.log(err));

console.log("Hello from the global scope");
