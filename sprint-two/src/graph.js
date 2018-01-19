

// Instantiate a new graph
var Graph = function() {
//this.stuff in here
  this.storage = {};
  this.edges = [];
  
//
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var res = false;
  this.forEachNode(this.storage, function(item) {
    if (item === node) {
      res = true;
    }
  });
  return res;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var stringEdge = '' + fromNode + toNode;
  var res = false;
  this.forEachNode(this.edges, function(item) {
    if (item === stringEdge) {
      res = true;
    }
  });
  return res;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push('' + fromNode + toNode, '' + toNode + fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(coll, cb) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      cb(coll[i], i, coll);
    }
  } else if (typeof coll === 'object') {
    for (var key in coll) {
      cb(coll[key], key, coll);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


