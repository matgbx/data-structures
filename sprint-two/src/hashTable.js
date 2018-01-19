

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.values = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexHasValues;
  this._storage.each(function(item, i, coll) {
    if (i === index) {
      if (Array.isArray(item)) {
        indexHasValues = item.length;
      } else {
        indexHasValues = 1;
      }
    }
  });
  this._storage.set(index, v);
  console.log(indexHasValues);
  
    
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  this._storage.each(function(item, i, coll) {
    if (item === value) {
      coll.splice(i, 1);
    }    
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


