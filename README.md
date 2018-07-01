video-store-js-jasmine
======================

## Group Notes / Credits:

This code and exercise was completed by the people at [@saskjavascript's](http://www.twitter.com/saskjavascript) first meetup on November 15, 2011. The solution is not complete and there are numerous spots for improvement but the group worked on all of this code in a RandoriKata style and all 8 people in attendance participated in shaping the output.

## Contributors & Attendees

* [@dmosher](http://www.twitter.com/dmosher)
* [@jboesch](http://www.twitter.com/jboesch)
* [@tonyarkles](http://www.twitter.com/tonyarkles)
* [@krystiano](http://www.twitter.com/krystiano)
* [@interlock](http://www.twitter.com/interlock)
* [@bzabos](http://www.twitter.com/bzabos)
* [@fromanegg](http://www.twitter.com/fromanegg)
* [Colleene Hansen](http://www.facebook.com/collenehansen)

## Intro

Based on the first chapter of Refactoring: improving the design of existing code By Martin Fowler, Kent Beck, this is a simple exercise to help teach test driven development to front-end developers using JavaScript and JasmineBDD.

## [Synopsis](http://books.google.ca/books?id=1MsETFPD3I0C&lpg=PP1&pg=PA3#v=onepage&q&f=false) 

"The sample program is very simple. It is a program to calculate and print a statement of a customer's charges at a video store. The program is told which movies a customer rented and for how long. It then calculates the charges, which depend on how long the movie is rented, and identifies the type of movie. There are three kinds of movies: regular, children's and new releases. In addition to calculating charges, the statement also computes frequent renter points, which vary depending on whether the film is a new release."

## Classes at a Glance (pseudocode)

The following is a really rough guideline and starting point for a group to work through. However, it's important to not take these as set in stone; let the group decide how to implement the features listed in the synopsis.

    Movie: ->
      type: CHILDRENS
      title: "Pirates of the Caribbean"
      
    Type: ->
      name:   "CHILDRENS" | "NEW RELEASE" | "REGULAR"
      price:  2.50        | 5.00          | 4.00
      points: 5           | 10            | 15
      
    Rental: ->
      movie: (title: "Pirates of the Caribbean", type: CHILDRENS)
      days_rented: 4
      
    Customer: ->
      rentals: [rental1, rental2, ... rentalN]
      statement: "Pirates of the Caribbean, 4 days @ $2.50/day, Total Charges: $10.00, Frequent Renter Points this Transaction: 5"
      frequent_renter_points: 10
 
## Supporting Materials

* [Jasmine BDD Standalone SpecRunner](https://github.com/jasmine/jasmine/releases/download/v3.1.0/jasmine-standalone-3.1.0.zip)
* [Refactoring: improving the design of existing code, By Martin Fowler & Kent Beck](http://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672/ref=sr_1_1?ie=UTF8&qid=1321327192&sr=8-1)
* [RandoriKata Instructions](http://codingdojo.org/cgi-bin/wiki.pl?RandoriKata)
* [Rhythm of Test First](http://codingdojo.org/cgi-bin/wiki.pl?RhythmOfTestFirst)
