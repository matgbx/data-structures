var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.first = 0;
  instance.count = 0;
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //adds to back of queue
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  //removes and returns from front of queue e.g. oldest item
  if ((this.count - this.first) > 0) {	
    var firstItem = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return firstItem;
  }
};

queueMethods.size = function() {
  return this.count - this.first;
};

