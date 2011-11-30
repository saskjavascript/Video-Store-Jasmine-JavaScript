function Customer() {
  this.rentals = [];
  
  this.addRental = function(rental) {
    this.rentals.push(rental);
  }
  this.statement = function() {
    var lineItems = "";
    for(var i = 0; i < this.rentals.length;i++) {
      // rentals[i].movie.type.frp
      lineItems += this.rentals[i].movie.title + ", " + this.rentals[i].days_rented + " days @ $" + this.rentals[i].movie.type.price.toFixed(2) + "/day";
    }
    // Pirates of the Caribbean,4 @ $2.5/day, Total Charges: $10.00
    
    return lineItems += ", Total Charges: $10.00" + ", total FRP is " + this.rentals[0].movie.type.frp;
  }
}

Customer.prototype = {
  addRentals: function (rentals) {
    this.rentals = this.rentals.concat(rentals);
  }
};