const movieSelector = document.querySelector("#movie-selector")
const movieTitle = document.querySelector("#movie-title")
const releaseYear = document.querySelector("#display-info p:first-of-type")
const movieDescription = document.querySelector("#display-info p:last-of-type")
const movieOrigTitle = document.querySelector("#original-title")
const movieRoman = document.querySelector("#original-info p:last-of-type")
const movieForm = document.querySelector("form")
const movieReviews = document.querySelector("#submitted-reviews")

movieForm.addEventListener('submit',(event) => {
    event.preventDefault()
    const userReview = document.querySelector("#user-input")
    const userValue = userReview.value
    const li = document.createElement('li')
    li.innerHTML = `<b>${movieTitle.textContent}:</b> ${userValue}`
    movieReviews.appendChild(li)
    userReview.value = ''
    console.log('submit is working')
})
 
async function movieList () {
    let results = await axios.get("https://ghibliapi.herokuapp.com/films")
    results.data.forEach(movie => {
        const movieOption = document.createElement('option')
        movieOption.textContent = movie.title
        movieOption.value = movie.id
        movieSelector.appendChild(movieOption)
    })
    console.log(results.data)
    console.log('movieList is working')
   
}

movieList()

async function movieGrabber (event) {
    const url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`
    const selected = await axios.get (url)
    movieTitle.textContent = selected.data.title
    releaseYear.textContent = selected.data.release_date
    movieDescription.textContent = selected.data.description
    movieOrigTitle.innerHTML = `${selected.data.original_title} <small>is the original title of the film🌈🌟</small>`
    console.log('movieGrabber is working')
}

movieSelector.addEventListener('change', movieGrabber)
