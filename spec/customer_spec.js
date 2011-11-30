describe("Customer", function() {
  
  var customer;
  
  beforeEach(function() {
    customer = new Customer();
  });
  
  function setupRental(typeName, typePrice, movieName, quantity, frp) {
    var type = new Type(typeName, typePrice, frp);
    var movie = new Movie(type, movieName);
    
    return new Rental(movie, quantity);
  }
  
  it("has an empty list of rentals on creation", function() {
    expect(customer.rentals).toEqual([]);
  });
  
  it("has one rental after adding", function() {
    var rental = setupRental();
    customer.addRental(rental);
    
    expect(customer.rentals.length).toBe(1);
    expect(customer.rentals[0]).not.toBe(undefined);
    expect(customer.rentals[0]).toEqual(rental);
  });
  
  it("has multiple rentals after adding", function() {
    var rentals = [setupRental(), setupRental()];
    customer.addRentals(rentals);
    expect(customer.rentals.length).toBe(2);
    expect(customer.rentals).toEqual(rentals);
  });
  
  it('generates statement with a rental', function() {
    var rental = setupRental('CHILDRENS', 2.50, "Pirates of the Caribbean", 4, 10 );
    customer.addRentals(rental);
    expect(customer.statement()).toBe("Pirates of the Caribbean, 4 days @ $2.50/day, Total Charges: $10.00, total FRP is 10")
  });
  
  it('generates statement with multiple rentals', function () {
    var rental = setupRental('CHILDRENS', 2.50, "movieName", 4);
    customer.addRentals(rental);
    expect(customer.statement()).toContain("movieName");
  });
});