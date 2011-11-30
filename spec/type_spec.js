describe('Type', function() {
  
  var type;
  
  beforeEach(function() {
    type = new Type("CHILDRENS", 2.50, 10);
  });
  
  it('has a name', function() {
    expect(type.name).toBe("CHILDRENS");    
  });
  
  it('has a price', function() {
    expect(type.price).toBe(2.50);
  });
  
  it('has a FRP', function() {
    expect(type.frp).toBe(10);
  })
  
});