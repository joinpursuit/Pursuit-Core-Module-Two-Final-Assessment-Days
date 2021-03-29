const movies = document.querySelector('#movies')
const button = document.querySelector('#movie-input')
const movieInput = document.querySelector('#movie-input')
const movieName = document.querySelector('h3')
const year = document.querySelector('#year')
const description = document.querySelector('#description')
const reviewList = document.querySelector('#review-list')
const reviewInput = document.querySelector('#review-input')
const reviewSubmit = document.querySelector('#review-submit')

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
        movies.addEventListener('input', (e) => {
            // e.preventDefault()
            console.log('click seen')
            console.log(movies.value)
            
            movieName.textContent = movies.value
            for (let i = 0; i < array.length; i++) {
                if (movies.value === array[i].title) {
                    year.textContent = array[i].release_date
                    description.textContent = array[i].description
                }
            }
        })
        reviewSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            const li = document.createElement('li')            
            li.innerHTML = `<strong>${movieName.textContent}</strong>: ${reviewInput.value}`
            reviewList.appendChild(li)
        })
    })
    .catch(err => (err))
}

movieGrab()












