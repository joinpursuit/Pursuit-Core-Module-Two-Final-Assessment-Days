const movieTitles = document.querySelector('select');


async function ghibliFilms() {
    const movieResults = await axios.get("https://ghibliapi.herokuapp.com/films")

    const allMovies = movieResults.data

    for (let title of allMovies) {
      filmData(title)
    }



    function filmData (ghibliTitle) {
        const titleNames = document.createElement('option')
        titleNames.textContent = ghibliTitle.title
        movieTitles.appendChild(titleNames)
    }

}
ghibliFilms();
