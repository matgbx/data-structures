var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  _.extend(instance, stackMethods);

  var storage = {};
  storage.itemCount = 0;
  

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage.itemCount = value;
  
};
  
stackMethods.pop = function() {

};

stackMethods.size = function() {
  console.log(this.push());
};

// var stack = new Stack();
// console.log(stack.size());