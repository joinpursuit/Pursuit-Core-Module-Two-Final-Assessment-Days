const movieTitles = document.querySelector('select');
const movieSelectOptions = document.querySelector('#movie-titles')
const form = document.querySelector('#subReview')
const listing = document.querySelector('ul')
const soloMovie= document.querySelector("#solo-movie")
const movieYear= document.querySelector("#movie-year")
const movieDescription= document.querySelector("#movie-description")





form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type=text]")
    const list = document.createElement("li");
    list.innerHTML = `<b>${soloMovie.textContent}:</b> ${input.value}`;
    listing.appendChild(list);
    form.reset();
  });



// !Select feature
async function ghibliFilms() {
    const movieResults = await axios.get("https://ghibliapi.herokuapp.com/films")

    const allMovies = movieResults.data

    allMovies.forEach((elem) => {
        const option = document.createElement('option')
        option.textContent = elem.title
        option.value = elem.id

        movieTitles.appendChild(option)
    })
}

movieTitles.addEventListener("change", (event) => {
    fetch(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
      .then((response) => {
        return response.json();
      })
      .then((rMT) => {
        soloMovie.textContent = rMT.title;
        movieYear.textContent = rMT.release_date;
        movieDescription.textContent = rMT.description;
      });
  });


ghibliFilms();
