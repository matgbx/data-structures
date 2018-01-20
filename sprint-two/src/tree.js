var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (typeof value === 'number') {
    this.children.push(Tree(value));
  } else {
    throw Error('input is not a number');
  }
};

treeMethods.contains = function(target) {
  if (typeof target === 'number') {
    var result = false;
    var search = function(obj, target) {
      if (obj.value === target) {
        result = true;
      }
      if (obj.children) {
        for (var i = 0; i < obj.children.length; i++) {
          search(obj.children[i], target);
        }
      }
    };
    search(this, target);
    return result;
  } else {
    throw Error('input is not a number');
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
