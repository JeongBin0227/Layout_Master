const movies = [
  { index: 1, title: 'BLACK CHRISTMAS', year: 1974, director: 'Bob Clarkm', like: 4, unLike: 1, url: 'http' },
  { index: 2, title: 'THE TENANT', year: 1976, director: 'Roman Polanski', like: 0, unLike: 1, url: 'http' },
];

// import { movies } from './data/movieData';
// const movies = require('./data/movieData');

const content = document.querySelector('.content');

const makeMovies = (movie) => {
  let tmp = document.createElement('div');
  tmp.classList.add('movie');
  let title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = movie.index + '. ' + movie.title + '( ' + movie.year + ' )';
  tmp.appendChild(title);

  let director = document.createElement('h3');
  director.innerHTML = 'Directed by ' + movie.director;
  tmp.appendChild(director);

  let grade = document.createElement('h3');
  grade.innerHTML = 'Do you agree? ' + movie.like + ', ' + movie.unLike;
  tmp.appendChild(grade);

  return tmp;
};

movies.forEach((movie) => {
  content.appendChild(makeMovies(movie));
});
