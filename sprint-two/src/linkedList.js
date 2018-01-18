var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
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
    var item = list.head;
    
    if (item.value === target) {
      return true;
    }
    var test = false;
    var nextItem = item.next;
    while (test === false) {
      if (!nextItem) {
        return false;
      } else if (nextItem.value !== target) {
        test = false;
        nextItem = nextItem.next;
      } else if (nextItem.value === target) {
        test = true;
      }
    }
    
    return test;
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
