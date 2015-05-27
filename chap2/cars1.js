//This is not the way to create good objects, this isn't scalable!
var myCar = {};

myCar.honk = function() {
  console.log("Honk honk");
}

myCar.drive = function(){
  console.log("Vroom...");
}

myCar.honk();
myCar.drive();