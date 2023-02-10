const order = {
  customer: "Sean",
  address: "SE3 45"
};

if (!order?.city) {
  console.log('City is required');
}


/*In this example we are trying to check if a value for the `city` property is defined. 
However, the code can be simplified. How can we do that?*/
