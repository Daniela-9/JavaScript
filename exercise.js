function repeatHello(callback){
    setInterval(callback, 1000)
}

sayHi = () => console.log("Hello");
repeatHello(sayHi);

//Perchè essendo una arrow, sayHi è una funzione anonima con un return implicito