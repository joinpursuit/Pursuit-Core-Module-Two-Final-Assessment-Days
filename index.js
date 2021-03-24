const selectMovie = document.querySelector('select')
const title = document.getElementById('title')
const releaseYear = document.getElementById('release-year')
const description = document.getElementById('description')
const submit = document.getElementById('submit')
const list = document.getElementById('review-list')
const form = document.querySelector('form')

async function getStudioFilms() {
    try {
        const result = await axios.get('https://ghibliapi.herokuapp.com/films')
        const movieArr = result.data
       
        for (let movieInfo of movieArr) {
            assignFilms(movieInfo)
        }

    } catch(e) {
        console.log(e)
    }
}

function assignFilms(movieInfo) {
    const option = document.createElement('option')

    option.value = movieInfo.title
    option.textContent = movieInfo.title
    selectMovie.appendChild(option)

    return option
}

selectMovie.addEventListener('change', (e) => {
    e.preventDefault()

    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(movie => {
        for(let i = 0; i < movie.length; i += 1) {
            if (selectMovie.value === movie[i].title) {
                title.textContent = movie[i].title
                releaseYear.textContent = movie[i].release_date
                description.textContent = movie[i].description
            }
        }
    })
})  

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const review = document.getElementById('submit-text').value
        
    li.innerHTML = `<b>${selectMovie.value}:</b> ${review}`
    list.appendChild(li)
    form.reset()
})

getStudioFilms()