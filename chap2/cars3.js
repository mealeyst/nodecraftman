//A better solution, but this doesn't give us the full range of
//abilities that we can leverage with javascript. The functions are however, 
//now being called from one place which makes it much more efficient.
var Car = function() {
  this.honk = function() {
    console.log("Honk honk");
  };
  this.drive = function(){
    console.log("Vrooom...");
  }
}

var myCar1 = new Car();
var myCar2 = new Car();
var myCar3 = new Car();
var myCar4 = new Car();

myCar1.drive();
myCar4.honk();
console.dir(myCar3.constructor);