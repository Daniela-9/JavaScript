function printAsyncName(callback, name){
    setTimeout(() => {
        callback;
    },1000);
    setTimeout(() => {
        console.log(name);
    },2000);
}

sayHello= () => console.log("Hello");
printAsyncName(sayHello(),"Hugo");
