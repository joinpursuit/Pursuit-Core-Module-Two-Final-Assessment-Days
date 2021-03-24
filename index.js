document.addEventListener("DOMContentLoaded", async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films")
    const films = response.data
    filmList = document.getElementById("film-selection-list")
    // const emptyOption = document.createElement("li")
    // filmList.appendChild(emptyOption)
    films.forEach((film, i) => {
        const option = document.createElement("option")
        option.textContent = film.title
        option.value = i
        filmList.appendChild(option)
    })
    const movieTitle = document.getElementById("title")
    filmList.addEventListener("change", () => {
        const section = document.getElementById("review-section")
        if(section.className !== "section-show"){
            section.className = "section-show"
        }
        const movieYear = document.getElementById("release-year")
        const movieDesc = document.getElementById("description")
        movieTitle.textContent = films[filmList.value].title
        movieYear.textContent = films[filmList.value].release_date
        movieDesc.textContent = films[filmList.value].description
    })
    const form = document.getElementById("review-form")
    form.addEventListener("submit", e => {
        e.preventDefault()
        const msg = document.getElementById("review-message")
        const ul = document.getElementById("movie-review")
        const li = document.createElement("li")
        li.innerHTML = `<b>${movieTitle.textContent}:</b> ${msg.value}`
        ul.appendChild(li)
        form.reset()
    })
})