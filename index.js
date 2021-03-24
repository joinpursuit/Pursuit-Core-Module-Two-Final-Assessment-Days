const select = document.querySelector("select");
const title = document.querySelector("#title");
const release = document.querySelector("#release-year");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const submitted = document.querySelector("#submitted-reviews");

async function getFilm() {
  const filmApi = await axios.get("https://ghibliapi.herokuapp.com/films");
  const filmData = filmApi.data;
  
  filmData.forEach((film) => {
    const option = document.createElement("option");
    option.textContent = film.title;
    option.value = film.id;
    select.appendChild(option);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input[type=text]").value;
  const list = document.createElement("li");
  list.innerHTML = `<b>${title.textContent}:</b> ${input}`;
  submitted.appendChild(list);
  form.reset();
});

select.addEventListener("click", (item) => {
    fetch(`https://ghibliapi.herokuapp.com/films/${item.target.value}`)
      .then((response) => {
        return response.json();
      })
  
      .then((film) => {
        title.textContent = film.title;
        release.textContent = film.release_date;
        description.textContent = film.description;
    });
});

getFilm();