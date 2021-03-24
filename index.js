console.log("connected")

const dropdown = document.querySelector('select')
const subReview = document.querySelector('submit')
const ghibliTitle = document.querySelector('h3')
const ghibliYear = document.querySelector('yearInfo')
const ghibliDescription = document.querySelector('dataInfo')

async function allFilms() {
   
   try {
      const res = await axios.get('https://ghibliapi.herokuapp.com/films')
      const filmData = res.data
      
      filmData.forEach(film => {
         const movies = document.createElement('option')
         console.log(film)
         movies.textContent = film.title
         movies.value = film.id
         dropdown.appendChild(movies)
      });

   } catch (error) {

      console.log(error)  
   }
      // console.log(film.title)
      // console.log(film.release_date)
      // console.log(film.description)
} 

function allOptions(film) {
   

   
showMovies.addEventListener('change', () => {
      function showMovies() {
         ghibliTitle.textContent = showMovies.title
         ghibliYear.textContent = film.release_date
         ghibliDescription.textContent = film.description
      }
      showMovies()
   })
   return movies
}







allFilms()









