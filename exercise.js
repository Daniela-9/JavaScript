function printName(){
    const helloName = "Hello John";
    
    function inner(){
        return helloName;
    }
return inner;
}
setTimeout(inner, 1000);


console.log(printName()());




