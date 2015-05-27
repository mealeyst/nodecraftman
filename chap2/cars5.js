//Now for inheritance:
var Vehical = function() {};

Vehical.prototype.drive = function() {
  console.log("Vrooom...");
};

var Car = function() {};

Car.prototype = new Vehical();

Car.prototype.honk = function() {
  console.log("Honk honk");
};

var Motorcycle = function() {};

Motorcycle.prototype = new Vehical();

Motorcycle.prototype.revEngine = function() {
  console.log("Grrraaaaaaa!");
};

var myCar = new Car();
var myBike = new Motorcycle();

//Both the Motorcycle and the car have access to the drive() function
myCar.drive();
myBike.drive();

//The interpreter goies up the chain of objects looking for prototypes that
//match the function that is being executed.