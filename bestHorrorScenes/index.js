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

  let director = document.createElement('h3');
  director.innerHTML = 'Directed by ' + movie.director;
  director.classList.add('director');

  title.appendChild(director);

  tmp.appendChild(title);

  let video = document.createElement('video');
  video.src = movie.url;

  let grade = document.createElement('h3');
  grade.innerHTML = 'Do you agree? ' + movie.like + ', ' + movie.unLike;
  tmp.appendChild(grade);

  return tmp;
};

//<video id="myVideo" src="movie.mp4" controls autoplay></video>

movies.forEach((movie) => {
  content.appendChild(makeMovies(movie));
});
