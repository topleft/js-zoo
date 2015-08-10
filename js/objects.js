

var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;

};

var pig = new Animal("Joe", 2, "pig");
var horse = new Animal("Sally", 8, "horse");

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
  else
    return "Zzz, Zzz, Zzz";
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
  if(this.status === "closed")
    this.status = 'open';
  else this.status = 'closed';
};

Zoo.prototype.isOpen = function(){
  if (this.status === 'open')
    return "Open!";
  else
    return "Closed!"
};

Zoo.prototype.addAnimal = function(animal){
  if(zoo.status === "open" &&
     animal instanceof Animal &&
     this.animals.indexOf(animal) === -1)
  this.animals.push(animal);
};

Zoo.prototype.removeAnimal = function(animal){
  var index = this.animals.indexOf(animal);
  this.animals.splice(index, 1);
};

