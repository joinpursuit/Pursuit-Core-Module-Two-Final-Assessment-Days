document.addEventListener("DOMContentLoaded", () => {
  let select = document.querySelector("select")
  let reviewInput = document.querySelector('form')
  let filmData = []
  let index = 0


  select.addEventListener("change", (e) => {
    index = e.target.value
    appendFilmDetail(filmData, index)
  })

  reviewInput.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form submitted')
    
    let review = e.target.review.value
    
    reviewInput.reset()

    addReview(index, review)

  })

  function addReview(index, review) {

    let reviewHTML = `<strong>${filmData[index].title} ${review}</strong>`
    
    if(!filmData[index].reviews) {
      filmData[index].reviews = []
      filmData[index].reviews.push(reviewHTML)
      console.log(filmData)
    }
    else {
      rv.push(review)
      console.log(filmData)
    }

    let reviewUL = document.getElementById("reviews")

    filmData[index].reviews.forEach(r => {
      let li = document.createElement("li")
      li.innerHTML = r
      reviewUL.appendChild(li)
    })

  }

  async function getFilms () {
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
      console.log(res.data)
      filmData = res.data
      appendFilms(res.data)
    }
    catch(e) {
      console.error(e)
    }

  }

  function appendFilms(films) {

    for(let i = 0; i < films.length; i++) {
      let option = document.createElement('option')
      option.innerText = films[i].title
      option.value = i
      select.appendChild(option)
    }
  }

  function appendFilmDetail(filmData, index) {
    let display = document.getElementById("display-info")
    let movieTitle = document.querySelector("h3.title")
    let year = document.querySelector(".year")
    let desc = document.querySelector('.description')
    let reviewDiv = document.getElementById("reviews")

    const { title, release_date, description, reviews } = filmData[index]

    movieTitle.innerHTML = `<strong>${title}</strong>`
    year.textContent = release_date
    desc.textContent = description
    console.log(reviews)
    if(reviews && reviews.length > 0) {
      console.log('reviews found')
      reviews.forEach(r => {
        let li = document.createElement('li')
        li.textContent = r
        reviewDiv.appendChild(li)
      })

    }
  }
  

  getFilms()
})