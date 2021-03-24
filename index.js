//create option tags and append them to select tag
//option tags should contain movie name
//selecting movie name should fill h3 
//h3 p1 should have the year of the movie name
//h3 p2 should have the movie description
const movies = document.querySelector('#movies')
const button = document.querySelector('#movie-input')
const movieInput = document.querySelector('#movie-input')
const movieName = document.querySelector('h3')
const year = document.querySelector('#year')
const description = document.querySelector('#description')

const movieGrab = () => {
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        const array = response.data
        for (let i = 0; i < array.length; i++) {            
            const options = document.createElement('option')
            movies.appendChild(options)
            options.textContent = array[i].title
            options.value = array[i].title
        }
        button.addEventListener('click', (e) => {
            e.preventDefault()
            movieName.textContent = movies.value
            
            
        })
    })
    .catch(err => (err))
}

movieGrab()












