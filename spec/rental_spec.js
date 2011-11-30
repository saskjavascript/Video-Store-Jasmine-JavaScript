describe("Rental", function() {
  
  var type, movie, rental;

  beforeEach(function() {
    type = new Type('CHILDRENS', 2.50);
    movie = new Movie(type, "Pirates of the Caribbean");    
    rental = new Rental(movie, 4);
  });
  
  it("has a movie", function() {
    expect(rental.movie).toEqual(movie);
  });
  
  it("has days rented", function() {
    expect(rental.days_rented).toBe(4);
  })
});