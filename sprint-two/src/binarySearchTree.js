var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left;
  newTree.right;

  _.extend(newTree, newTreeMethods);
   
  return newTree;   
};

var newTreeMethods = {};

newTreeMethods.insert = function(num) {
  var findPoint = function(obj, num) {
    if (num < obj.value) {
      if (!obj.left) {
        obj.left = BinarySearchTree(num);
      } else {
        findPoint(obj.left, num);
      }
    } else if (num > obj.value) {
      if (!obj.right) {
        obj.right = BinarySearchTree(num);
      } else {
        findPoint(obj.right, num);
      }		
    }
  };
  findPoint(this, num);
};

newTreeMethods.contains = function(target) {
  var result = false;
  var find = function(obj, target) {
    if (obj.value === target) {
      result = true;
    }
    if (obj.left) {
      find(obj.left, target);
    }
    if (obj.right) {
      find(obj.right, target);
    }
  };
  find(this, target);
  return result;
};
newTreeMethods.depthFirstLog = function(cb) {
  var each = function(obj, cb) {
    cb(obj.value);
    if (obj.left) {
      each(obj.left, cb);
    }
    if (obj.right) {
      each(obj.right, cb);
    }
  };
  each(this, cb);
};
            





/*
 * Complexity: What is the time complexity of the above functions?
 */
