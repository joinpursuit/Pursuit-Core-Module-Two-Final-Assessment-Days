const allMovies = document.querySelector("select")
const form = document.querySelector("form")
const reviews = document.getElementById("reviewList")

async function getMovies () {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const apiResults = res.data
    console.log(apiResults)
    for (let movie of apiResults) {
        const selection = movieSelection()
        allMovies.appendChild(selection)
    }    
}

function movieSelection(movie) {
    const option = document.createElement("option")

    const movieTitle = document.createElement("p")
    movieTitle.textContent = movie.title
    movieTitle.classList.add("selection-options")
    option.appendChild(movieTitle)

    option.addEventListener("click", () => {
        const title = document.querySelector("#display-info h3")
        const releaseYr = document.querySelector("#release-year")
        const selectedFilm = document.querySelector("#selected-film")

        title.textContent = movie.title
        releaseYr.innerHTML = `Released on: ${movie.release_date}`
        selectedFilm.innerHTML = `Description: ${movie.description}`
    })
    
    return option
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const titleName = document.querySelector("#display-info h3").textContent
    const review = document.querySelector(`input[type = "text"]`).value
    const li = document.createElement("li")
    li.innerHTML = `<strong>${titleName}:<strong>` + review
    reviewList.appendChild(li)
    form.reset()
})

getMovies()