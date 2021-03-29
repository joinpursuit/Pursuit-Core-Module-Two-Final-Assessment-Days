
## todo

* add html elements


## interaction goals

use <select> dropdown to select film

dropdown should have all the movie titles in it
  - make a request to ghibli api 'https://ghibliapi.herokuapp.com/films'
  - iterate through the response
  - add an <option> for every movie
  - <option> contains title of movie

when i click the dropdown, it should add title, date, description to dom
  - on change event listener for <select>
  - get the option value for which one was selected
  - based on that option value, append stuff to dom
  - every time i switch to a different dropdown it changes the above 3 things

when i submit a review it appears on the page with movie title next to it
  - add event listener to handle the submit
  - get reference to reviews ul
  - append review to dom (as li)