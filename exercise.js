function repeatHello(callback){
    setInterval(callback, 1000)
}

sayHi = () => console.log("Hello");
repeatHello(sayHi);