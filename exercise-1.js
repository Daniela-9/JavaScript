const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  
};

const person2 = person1;



// Modify the property `firstName` of the `person2` in "Simon".
//Write a comment explaining why, by modifying the object `person2`, also the object `person1` would be modified.

person2.firstName = "Simon";
 


//This happens because of memory reference, person2 updated the original reference so all object which is pointing to this reference will get updated.

console.log(person1);
console.log(person2);
