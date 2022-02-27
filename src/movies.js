// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {const moviesDirector = movies.map((movie) => movie.director) 
  return moviesDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesDrama = movies.filter((movie)=> {
    //console.log(movie.genre);
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
})
return moviesDrama.length}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
  let initialValue = 0;
  const sumScore = movies.reduce(
    function (n, movie) {
      if ("score" in movie) {
        return n + movie.score 
      } else { return n };
    },
    initialValue
  );
  if (movies.length === 0) {
    return 0;
  }
  return Math.round((sumScore / movies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const moviesDrama = movies.filter((movie)=> {
  return (movie.genre == 'Drama')})}
//moviesDrama.reduce(function (movies.score))}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {movies.sort(function (a, b)
  {return b.year - a.year})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {movies.sort(function(a, b){
  if(a.title < b.title) {return -1;}
  if(a.title > b.title) {return 1;}
  return 0;
})}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
