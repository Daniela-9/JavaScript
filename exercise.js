function repeatHello(callback){
    const repeat = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeat), 5000);
}
sayHello = () => console.log("Hello");
repeatHello(sayHello);

//SayHello in quanto arrow function è anonima e ritorna automaticamente "Hello" ogni secondo finche non viene interrotta