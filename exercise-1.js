// Class definition

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

       
    }
}





const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);


const teacher = new Person('Ada', 'Lorri');
console.log(teacher.firstName + " " + teacher.lastName);
