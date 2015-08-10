
var animal;

describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Fido", 27, "pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('oink');
    });
    it('should not oink if it is not pig', function(){
      animal.kind = 'lion';
      expect(animal.oink()).toEqual('feed me!');
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.growUp();
      expect(animal.age).toEqual(28);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toEqual(false);
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.wakeUp();
      expect(animal.awake).toEqual(true);
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      animal.wakeUp();
      expect(animal.awake).toEqual(true);
      animal.sleep();
      expect(animal.awake).toEqual(false);
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.wakeUp();
      expect(animal.feed()).toEqual("NOM, NOM, NOM");
    });
    it('not should get fed if sleeping', function(){
      animal.sleep();
      expect(animal.feed()).toEqual("Zzz, Zzz, Zzz");
    });
  });

});


var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Boulder");
      expect(zoo.location).toEqual("Boulder");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.change();
      expect(zoo.status).toEqual("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.change();
      expect(zoo.isOpen()).toEqual("Open!");
    });
    it('should see if the zoo is closed', function(){
      // zoo.change();
      expect(zoo.isOpen()).toEqual("Closed!");
      // add spec
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(0);
    });
    it('should add an animal to the animals array', function(){
      zoo.change();
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });

    it('should only add instances of animals', function(){
      zoo.change();
      zoo.addAnimal("pig");
      expect(zoo.animals.length).toEqual(0);
    });

    it('should not add duplicates', function(){
      zoo.change();
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.change();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      expect(zoo.animals.length).toEqual(2);
      zoo.removeAnimal(lion);
      expect(zoo.animals.length).toEqual(1);
    });
  });
});





