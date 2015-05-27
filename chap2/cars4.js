//Using a protorye, we again have all of the function pointing to one object,
//and we have the added benifit of being able to change the functions on the
//fly!
var Car = function() {};
Car.prototype.honk = function() {
  console.log("Honk honk");
};
Car.prototype.drive = function() {
  console.log("Vroooom...");
};

var myCar1 = new Car();
var myCar2 = new Car();

myCar1.honk(); //This executes the Car.prototype.honk() function
myCar2.drive();//This executes the Car.prototype.drive() function

Car.prototype.honk = function() {
  console.log("Beep beep");
};

myCar1.honk(); //This executes the Car.prototype.honk() which we just changed!

//We can also add functions as well...
Car.prototype.break = function() {
  console.log("Screeeeech!");
};

myCar2.break();

//We can also override the prototyped functions on an object by object basis
myCar2.honk = function() {
  console.log("Meep meep");
}
myCar1.honk();
myCar2.honk();

//When the interpreter calls myCar2.honk(), there is now a function within
//myCar2. Therefore the interpreter no longer follows the path to the prototype
//of myCar2, and executes the newly defined function within the object itself.
//
//myCar1 however, still does not have a honk function defined and so the
//interpreter instead goes out to the Car.prototype to see if it has a "honk()"
//function, and runs that instead. 