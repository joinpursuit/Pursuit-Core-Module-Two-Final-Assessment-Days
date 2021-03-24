const allMovies = document.querySelector('#select-title')
const form = document.querySelector('#review-box')
const commentList = document.getElementById('review-comments')

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const currTitle = document.querySelector('title').textContent

    const comment = document.querySelector('#review').value
    
    const li = document.createElement('li')
    li.innerHTML = `${comment}`
    commentList.appendChild(li)

})

async function getMovies () {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const apiResult = res.data

    apiResult.forEach(film => {
        const movie = document.createElement("option")
        allMovies.textContent = movie
        allMovies.appendChild(movie)
        console.log(film)

    })

}

function chooseMovie(list) {
    const li = document.createElement("select")

    const option = document.createElement('li')
    option.innerText = list.title
    li.appendChild(option)


    li.addEventListener("click", ()=> {
        const title = document.querySelector('#movie-title')
        const year = document.querySelector('#release-year')
        const description = document.querySelector('#description')

        title.textContent = film.data.title
        year.textContent = movie.data.release_date
        description.textContent = movie.data.description

    })

    return li
}


getMovies()