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
	var search = function(obj, target) {
		if (this.value === target) {
			result = true;
		} else if (target < this.value && this.left) {
			search(this.left);
		} else if (target > this.value && this.right) {
			search(this.right);
		} 
	}
	search(this, target);
	return result;
};

newTreeMethods.depthFirstLog = function(cb) {
  
};
            





/*
 * Complexity: What is the time complexity of the above functions?
 */
