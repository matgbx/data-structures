

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
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.storage[node];
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i][0] === node.toString()) {
        this.removeEdge(Number(this.edges[i][0]), Number(this.edges[i][1]));
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var vertex = '' + fromNode + toNode;
  return this.edges.includes(vertex);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push('' + fromNode + toNode, '' + toNode + fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edge1 = '' + fromNode + toNode;
  var edge2 = edge1.split('').reverse().join('');
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i] === edge1) {
      this.edges.splice(i, 1);
    }
    if (this.edges[i] === edge2) {
      this.edges.splice(i, 1);
    }
  }
};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let key in this.storage){
    cb(this.storage[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


