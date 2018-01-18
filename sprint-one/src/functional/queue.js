var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
    
  };

  someInstance.dequeue = function() {  
    if (someInstance.size() > 0) {
      var zero = storage[first];
      delete storage[first];
      first++;
      return zero;
    } 
  };

  someInstance.size = function() {
    return size - first;
  };

  return someInstance;
};