const select = document.querySelector("select");
const form = document.querySelector("form");
const commentList = document.getElementById('review-comments')
const titles = document.querySelector("#title");
const year = document.querySelector("#release");
const info = document.querySelector("#description");

async function getFilms() {
  const res = await axios.get("https://ghibliapi.herokuapp.com/films");
  const apiResult = res.data;

  apiResult.forEach((film) => {
    const option = document.createElement("option");
    option.textContent = film.title;
    option.value = film.id;
    select.appendChild(option);
  });
}

select.addEventListener("change", (e) => {
  fetch(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
    .then((response) => {
      return response.json();
    })
    .then((Movie) => {
      titles.innerHTML = Movie.title;
      year.innerHTML = Movie.release_date;
      info.innerHTML = Movie.description;
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const currTitle = document.querySelector('title').textContent
    const comment = document.querySelector('#review').value
    
    const li = document.createElement('li')
    li.innerHTML = `${comment}`
    commentList.appendChild(li)
})

getFilms();