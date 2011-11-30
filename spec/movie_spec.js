describe('Movie', function() {
  
  var movie;
  var type;
  
  beforeEach(function() {
    type = new Type('CHILDRENS', 2.50);
    movie = new Movie(type, "Pirates of the Caribbean");    
  });
  
  it('has a type', function() {
    expect(movie.type).toBe(type);
  });
  
  it('has a title', function() {
    expect(movie.title).toBe("Pirates of the Caribbean");
  });
  
});