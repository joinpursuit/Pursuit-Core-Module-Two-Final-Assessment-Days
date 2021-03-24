const movieTitles = document.querySelector('#movie-titles');


async function ghibliFilms() {
    const movieResults = await axios.get("https://ghibliapi.herokuapp.com/films")

    const allMovies = movieResults.data
    console.log(allMovies.title)
}
ghibliFilms();
