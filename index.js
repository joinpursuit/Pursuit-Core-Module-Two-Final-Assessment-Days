const allMovies = document.querySelector("#options")
const title = document.querySelector('#mTitle')
const releaseD = document.querySelector("#release-date")
const descriptions = document.querySelector('#description')
const form = document.querySelector("form")
const reviews = document.querySelector("#user-reviews")

const getMovies = async () => {
    try {
        const res = await axios.get ("https://ghibliapi.herokuapp.com/films")
        res.data.forEach(film => {
            const choices = document.createElement("option")
            choices.innerText = film.title
            choices.value = film.id
            allMovies.appendChild(choices)
        })
    } catch (err) {
        console.log(err)
    }
}
getMovies()

allMovies.addEventListener("change", async (e) => {
    try {
        const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`
        const res = await axios.get(url);
        title.textContent = res.data.title
        releaseD.textContent = res.data.release_date
        descriptions.textContent = res.data.description

    } catch (err) {
        console.log(err)
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const review= document.querySelector('#review')
    const li = document.createElement('li')
    li.innerHTML = `<b>${title.textContent}:<b> ${review.value}`
    reviews.appendChild(li)
    review.value = ""
})

