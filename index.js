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
    const apiResult = res.data.title
    for (let list of apiResult) {
        const movie = chooseMovie(list)
        allMovies.appendChild(movie)
        console.log(movie)
    }

    
}

function chooseMovie(list) {
    const li = document.createElement("select")

    li.addEventListener("click", ()=> {
        const title = document.querySelector('#movie-title')
        const year = document.querySelector('#release-year')
        const description = document.querySelector('#description')

        title.textContent = movie.title

    })

    return li
}


getMovies()