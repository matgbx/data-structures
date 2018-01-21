var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this.storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'string') {
    return this.storage[item] ? true : false;
  } else {
    throw Error('input is not a string');
  }
};

setPrototype.remove = function(item) {
  if (typeof item === 'string') {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
