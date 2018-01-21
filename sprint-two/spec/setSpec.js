describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should only accepts strings as inputs', function() {
    set.add('Pink Panther');
    set.add(true);
    set.add(null);
    set.add(undefined);
    set.add(10);
    expect(set.contains('Pink Panther')).to.equal(true);
    expect(function() { set.contains(true); }).to.throw(Error);
    expect(function() { set.contains(null); }).to.throw(Error);    
    expect(function() { set.contains(undefined); }).to.throw(Error);
    expect(function() { set.contains(10); }).to.throw(Error);  
  });

});
