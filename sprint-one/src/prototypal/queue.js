var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.first = 0;
  instance.count = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if ((this.count - this.first) > 0) {
    var item = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return item;
  }
};

queueMethods.size = function() {
  return this.count - this.first;
};

