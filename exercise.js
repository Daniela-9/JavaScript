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
  .catch(console.log)
  .finally(() => console.log("Everything is fine"))



 
 