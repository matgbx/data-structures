var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  
  newTree.children = [];
  //was null to start & said 'fix me'
  /* .children property, and array that contains 
  a number of subtrees */
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //takes a value
  //sets value as a target of a node
  //adds the node as a child of the tree
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //takes an input (target)
  /*checks whether the input can be found as the target
    node or any descendant node  */
  //returns boolean
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
}; 




/*
 * Complexity: What is the time complexity of the above functions?
 */
