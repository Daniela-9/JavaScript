const isLogged = true;


const excercise = (logged) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (logged) resolve(Math.random());
      reject("Error: not logged");
    }, 1000);
  });

excercise(isLogged)
  .then((result) => result)
  .then((result) => {
    return new Promise((resolve, reject) => {
      if (result > 0.5) resolve({ name: "John", age: 24 });
      reject("Error: number < 0.5");
    });
  })
  .then(console.log)
  .catch(console.log);











/*Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, 
in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

Tips:

- If in doubt, watch the lesson
- To understand how they work, you can try adding `setTimeout` to the promise functions*/

