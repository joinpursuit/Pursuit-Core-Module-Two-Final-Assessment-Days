const movieTitles = document.querySelector('select');
const movieSelectOptions = document.querySelector('#movie-titles')
const form = document.querySelector('#subReview form')
const listing = document.querySelector('ul')
const soloMovie= document.querySelector("#solo-movie")
const movieYear= document.querySelector("#movie-year")
const movieDescription= document.querySelector("#movie-description")
const = document.querySelector()
const = document.querySelector()




// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const reviews = document.querySelector('input[type="text]').value

//     const  li = document.createElement('li')
//     li.innerHTML = `<bold>${h3.textContent}</bold> ${reviews}`
//     ul.appendChild(li)
//     form.reset()
// })



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

        movieSelectOptions.addEventListener('change', (e) => {
            e.preventDefault()

            const mt = document.querySelector('#display-info h3')
            const movieYear = document.querySelector('#display-info p:first-of-type')
            const describe = document.querySelector('#display-info p:last-of-type')

            mt.textContent = ghibliTitle.title
            movieYear.textContent = ghibliTitle.release_date
            describe.textContent = ghibliTitle.description

        })

        // form.addEventListener('submit', () => {
        //     e.preventDefault()
        //     const input = document.querySelectorAll('input[type=text').value
        //     const newti = document.createElement('li')
        //     newti.innerHTML = `<b>${h3.textContent}: </bold> ${input}`
        //     ul.appendChild(newti)
        //     form.reset()
        // })
    }
    // !End of Select Feature

}
ghibliFilms();
