                                                    

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.values = [];
};

HashTable.prototype.insert = function(k, v) {
  if (typeof k === 'string') {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var valAtIndex = this._storage.get(index);
    var valArray;
    if (!valAtIndex) {
      this._storage.set(index, [k, v]);
    } else if (valAtIndex && !Array.isArray(valAtIndex[0])) {
      this._storage.set(index, [valAtIndex, [k, v]]);
    } else if (valAtIndex && Array.isArray(valAtIndex[0])) {
      valAtIndex.push([k, v]);
      this._storage.set(index, valAtIndex);
    }
  } else {  
    throw Error('key must be a string!');
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //loop and check if item[0] is an array.
  var valAtIndex = this._storage.get(index);
  var result;
  if (valAtIndex) {
    if (!Array.isArray(valAtIndex[0]) && valAtIndex[0] === k) {
      return valAtIndex[1];
    } else if (Array.isArray(valAtIndex[0])) {
      valAtIndex.forEach(function(item, i, coll) {
        if (item[0] === k) {
          result = item[1];
        }
      });
    }
  }
  return result; 
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


