//The way that we were creating objects was only one way of doing things in
//javascript though, here is another example:

var vehical = {};
vehical.drive = function() {
  console.log('Vroooom...');
};

var car = Object.create(vehical);
car.honk = function() {
  console.log("Honk honk");
}

var myVehical = Object.create(vehical);
var myCar1 = Object.create(car);
var myCar2 = Object.create(car);

myCar1.honk();
myCar1.drive();

myCar2.drive();
myCar2.honk();

myVehical.drive();

//While we might be creating the functions drive and honk in the objects
//themselves, this is not all that memory inefficient as they are both only
//existing in memory once.