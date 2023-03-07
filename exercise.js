const number = 15;

function getNum(){
    return new Promise((resolve,reject) =>{
        if(number > 15){
            resolve("Number greater than 10");
        }else {
            reject("Not a valid number");
        }
    });
}

getNum()
.then((result) => console.log(result))
.catch((err) => console.log(err));

