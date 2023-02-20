/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
function Movie(title, year, budget) {
    this.title = title;
    this.year = year;
    this.budget = budget;
    this.wasExpensive = function() {
      return this.budget > 100000000;
    };
  }
console.log(Movie)