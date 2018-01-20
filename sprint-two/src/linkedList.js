var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.insert = function(target, value) {
    var node = new Node(value);
    var idealHead = list.head;
    var search = function(idealHead, target, value) {
      if (idealHead.value && idealHead.value === target) {
        var currentNode = idealHead;
        var nodeAfter = idealHead.next;
        currentNode.next = node;
        node.next = nodeAfter;
      } else {
        idealHead = idealHead.next;
        search(idealHead);
      }
    };
    search(idealHead, target, value);
  };

  list.findValue = function(target) {
    var value;
    var search = function(obj, target) {
      if (obj.value && obj.value === target) {
        value = obj;
      } else if (obj.next) {
        search(obj.next, target);
      }
    };
    search(list.head, target);
    // console.log(typeof value);
    return value;
  };

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = list.head;
    } else {
      list.tail.next = node;
      list.tail = node; 
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    var nextHead = list.head.next;
    delete list.head;
    list.head = nextHead;    
    return headValue; 
  };

  list.contains = function(target) {
    var result = list.findValue(target);
    return result !== undefined ? true : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
