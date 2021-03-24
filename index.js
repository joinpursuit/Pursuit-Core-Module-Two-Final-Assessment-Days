const allMovies = document.querySelector("#select")
const form = document.querySelector("form")
const reviews = document.getElementById("reviewList")
const title = document.querySelector("#display-info h3")
const releaseYr = document.querySelector("#release-year")
const selectedFilm = document.querySelector("#selected-film")

// async function getMovies () {
//     const res = await axios.get("https://ghibliapi.herokuapp.com/films")
//     res.data.forEach(movie => {
//         const option = document.createElement('option')
//         option.textContent = movie.title
//         allMovies.appendChild(option)
//     })
// }

async function getMovies () {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const apiResults = res.data
    
    console.log(apiResults)

    for (let i = 0; i <= 20; i++) {
        let option = document.createElement('option')
        option.textContent = apiResults[i].title
        allMovies.appendChild(option)
        }
        
    allMovies.addEventListener("change", () => {
            let chosenMovie = allMovies.selectedIndex

            const title = document.querySelector("#display-info h3")
            title.textContent = apiResults[chosenMovie-1].title
            const releaseYr = document.querySelector("#release-year")
            releaseYr.innerHTML = `Released on: ${apiResults[chosenMovie-1].release_date}`
            const selectedFilm = document.querySelector("#selected-film")
            selectedFilm.innerHTML = `Description: ${apiResults[chosenMovie-1].description}`
    })
}

// function movieSelection(movie) {
//     const option = document.createElement("option")

//     const movieTitle = document.createElement("p")
//     movieTitle.textContent = movie.title
//     movieTitle.classList.add("selection-options")
//     option.appendChild(movieTitle)

//     return option
// }

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const titleName = document.querySelector("#display-info h3").textContent
    const review = document.querySelector(`input[type = "text"]`).value
    const li = document.createElement("li")
    li.innerHTML = `<strong>${titleName}: <strong>` + review
    reviewList.appendChild(li)
    form.reset()
})

getMovies()