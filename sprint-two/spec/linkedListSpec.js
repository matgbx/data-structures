describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
  it('should have a tail.next value of null', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.next).to.equal(null);
  });

  it('should have methods "findValue" and "insert"', function() {
    expect(linkedList.findValue).to.be.a('function');
    expect(linkedList.insert).to.be.a('function');
  });

  it('should insert a node at the correct location', function() { 
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.insert(4, 8);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(8)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.findValue(4).next.value).to.equal(8);
    expect(linkedList.findValue(8).next.value).to.equal(5);
  });

  it('should return the target value when findValue is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(8);
    expect(linkedList.findValue(6)).to.be.a('object');
    expect(linkedList.findValue(6).value).to.equal(6);
  });
  // add more tests here to test the functionality of linkedList
});
