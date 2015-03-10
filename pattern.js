//
function inherit(child, parent){
  var wrapperClass = function(){};
  wrapperClass.prototype = parent.prototype;
  child.prototype = new wrapperClass();
  child.prototype.constructor = child;
  child.parentConstructor = parent;
}


//Example
function Animal(optionalOptions){
  /** @constructor */
  
  this.walk = function (){
    //walk like every animal
  }
}

/**
  * Class Dog
  * @extends Animal
  */
function Dog(optionalOptions){
  Animal.call(this, optionalOptions);
  
   
}
inherit(Dog, Animal);

/** @override*/
Dog.prototype.walk = function(){
  //walk like a dog
}

