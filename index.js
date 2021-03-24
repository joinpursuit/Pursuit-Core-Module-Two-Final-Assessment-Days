console.log("connected")

const dropdown = document.querySelector('select')
const subReview = document.querySelector('submit')
const ghibliTitle = document.querySelector('h3')
const ghibliYear = document.querySelector('#yearInfo')
const ghibliDescription = document.querySelector('#dataInfo')
const form = document.querySelector('form')
const display = document.querySelector('#display-info')

form.addEventListener('submit', (e) => {
   e.preventDefault()

   const userInput = document.querySelector('input[type="text"]').value
   const userComment = document.createElement('li')
   const ul = document.querySelector('ul')
   userComment.innerHTML = `<b>${ghibliTitle.textContent}:</b> ${userInput}`
   ul.appendChild(userComment)
   
   const input = document.querySelector('input')
   input.value = ""
})

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
}

dropdown.addEventListener("change", async (event) => {
   const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${event.target.value}`);
   ghibliTitle.textContent = res.data.title;
   ghibliYear.textContent = res.data.release_date;
   ghibliDescription.textContent = res.data.description;
});



allFilms()









