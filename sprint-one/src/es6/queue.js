class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.count = 0;
    this.storage = {};
  }
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue() {
    if (this.count - this.first > 0) {
      var remove = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return remove;
    }
    
  }
  size() {
    return this.count - this.first;
  }
}
