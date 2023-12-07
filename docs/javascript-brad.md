# Modern JavaScript From The Beginning 2.0 - Brad Traversy

## Section 10: Asynchronous JavaScript

### Promises

- Most of the time we deal with the response from a promise, not writing them. For example, we use `fetch` to get data from an API and it returns a promise. We need to know what to do with the promise and how to handle it.
- We use `new Promise` to create a promise. It takes in a function with two parameters: `resolve` and `reject`. Inside the function, we perform the asynchronous operation. If the operation is successful, we call `resolve` and pass in the data. If the operation fails, we call `reject` and pass in the error.

```javascript
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
```

- `setTimeout(callback, time)` is the function that you invoke to register your callback function and specify under what asynchronous conditions it should be invoked.

### Promises vs Callback Hell
