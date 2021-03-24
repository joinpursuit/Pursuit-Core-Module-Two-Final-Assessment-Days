const select = document.querySelector("select");
const form = document.querySelector("form");
const unordered = document.querySelector("ul");
const titleFilm = document.querySelector("#title");
const releaseFilm = document.querySelector("#release");
const descFilm = document.querySelector("#description");

async function films() {
  const result = await axios.get("https://ghibliapi.herokuapp.com/films");
  const filmResult = result.data;

  filmResult.forEach((film) => {
    const option = document.createElement("option");
    option.textContent = film.title;
    option.value = film.id;
    select.appendChild(option);
  });
}

select.addEventListener("change", (event) => {
  fetch(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
    .then((response) => {
      return response.json();
    })
    .then((currentFilm) => {
      titleFilm.textContent = currentFilm.title;
      releaseFilm.textContent = currentFilm.release_date;
      descFilm.textContent = currentFilm.description;
    });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input[type=text]").value;
  const list = document.createElement("li");
  list.innerHTML = `<b>${titleFilm.textContent}:</b> ${input}`;
  unordered.appendChild(list);
  form.reset();
});

films();
