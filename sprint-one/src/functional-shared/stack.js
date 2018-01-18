var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.itemCount = 0;
  instance.storage = {};
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.itemCount] = value;
  this.itemCount++;
  
};
  
stackMethods.pop = function() {
	if (this.itemCount > 0) {
		this.itemCount--;
		var last = this.storage[this.itemCount];
		delete this.storage[this.itemCount];
		return last;
	}
};

stackMethods.size = function() {
	return this.itemCount;
};
