//Again not an ideal way to create objects, each time a car is created,
//a new honk and drive function are allocated in memory instead of being
//refferenced once
var makeCar = function() {
  var newCar = {};
  newCar.honk = function() {
    console.log("Honk honk");
  };
  newCar.drive = function() {
    console.log("Vrooom...");
  };
  return newCar;
};

var myCar1 = makeCar();
var myCar2 = makeCar();
var myCar3 = makeCar();
var myCar4 = makeCar();

myCar4.drive();
myCar1.honk();