const movieTitles = document.querySelector('select');


// !Select feature
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

        const movieSelectOptions = document.querySelector('#movie-titles')

        movieSelectOptions.addEventListener('change', (e) => {
            e.preventDefault()


            const mt = document.querySelector('#display-info h3')
            const movieYear = document.querySelector('#display-info p:first-of-type')
            const describe = document.querySelector('#display-info p:last-of-type')

            mt.textContent = ghibliTitle.title
            movieYear.textContent = ghibliTitle.release_date
            describe.textContent = ghibliTitle.description

        })
    }
    // !End of Select Feature


}
ghibliFilms();
