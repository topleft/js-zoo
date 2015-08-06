

var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;

};

var pig = new Animal("Joe", 2, "pig");

Animal.prototype.oink = function (){
  if (this.kind === "pig")
    return "oink";
  else return "feed me!";
};

Animal.prototype.growUp = function(){
  this.age += 1;
};

Animal.prototype.feed = function(){
  if(this.awake)
    return  "NOM, NOM, NOM";
};

Animal.prototype.wakeUp = function(){
  if (this.awake)
    return "Already awake";
  else
    this.awake = true;
};

Animal.prototype.sleep = function (){
  if (this.awake)
    this.awake = false;
  else
    return "Already sleeping";
};

var Zoo = function(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
};

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};

Zoo.prototype.change = function(){
  this.status = 'open';
};

Zoo.prototype.isOpen = function(){
  if (this.status === 'open')
    return "Open!";
};

Zoo.prototype.addAnimal = function(animal){
  this.animals.push(animal)
};

Zoo.prototype.removeAnimal = function(animal){
  var index = this.animals.indexOf(animal);
  this.animals.splice(index, 1);
};

// name
// location
// status - this should default to "closed"
// animals - this should default to an empty array
// changeLocation() - a method that updates the location of the zoo
// open() - a method that changes the status to "open"
// close() - open - a method that changes the status to "closed"
// isOpen() - a method that returns "Open!" if the zoo is not closed
// addAnimal() - a method that adds an animal to the animals array ONLY if the zoo is open, the animal is an instance of the Animal class AND the animal is not already in the animals array.
// removeAnimal() - a method that removes an animal from the animals array ONLY if the zoo is open.


// oink() - returns "oink!" if the instance of an animal is a pig.
// growUp() - a method that increases the age of the animal by one
// feed() - if the animal is awake, return "NOM NOM NOM"
// wakeUp() - a method that changes the awake property to true
// sleep() - a method that changes the awake property to false