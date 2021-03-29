document.addEventListener("DOMContentLoaded", () => {
  let filmData = []
  let select = document.querySelector("select")
  let index = 0
  let form = document.querySelector("form")
  let reviewsArray = []
  let reviewsUL = document.querySelector("#reviews")
  
  select.addEventListener("change", (e) => {
    console.log(e.target.value)
    index = e.target.value
    appendFilmDetail(filmData, index)
  })
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    

    console.log(e.target)
    console.log(e.target.review)
    let reviewText = e.target.review.value
    let title = filmData[index].title

    addReviews(reviewText, title)

    // get the value out of the input
    // create an li
    // append it to dom 
  })

  function addReviews(reviewText, title) {
    reviewsArray.push({
      reviewText,
      title
    })

    console.log(reviewsArray)
    appendReviewsToDOM()
  }

  function appendReviewsToDOM() {
    reviewsUL.innerHTML = ""

    reviewsArray.forEach((review, i) => {
      let li = document.createElement("li")
      li.innerHTML = `<strong>${review.title}: ${review.reviewText}</strong><button data-index="${i}">Delete</button>`
      reviewsUL.appendChild(li)
    })

    getButtonEventListeners()
  }

  function getButtonEventListeners() {
    let buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        let index = e.target.dataset.index
        reviewsArray.splice(index, 1)
        appendReviewsToDOM()
      })
    })
  }

  // add event listeners to every button
  // onclick, get the data-index of the button
  // splice the reviews array by index to remove that review
  // appendReviewsToDOM()


  async function getFilms () {
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
      // console.log(res.data)
      filmData = res.data
      console.log(filmData)
      appendFilms(filmData)
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
    // let display = document.getElementById("display-info")
    let movieTitle = document.querySelector("h3.title")
    let year = document.querySelector(".year")
    let desc = document.querySelector('.description')
    let reviewDiv = document.getElementById("reviews")

    // destructuring
    const { title, release_date, description, reviews } = filmData[index]

    movieTitle.innerHTML = `<strong>${title}</strong>`
    year.textContent = release_date
    desc.textContent = description

  }

  
  
  getFilms()
  
  console.log(filmData)

})