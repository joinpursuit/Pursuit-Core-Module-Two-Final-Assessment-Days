document.addEventListener("DOMContentLoaded", () => {
  getFilms();
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
});

const getFilms = async () => {
  let api = await axios.get("https://ghibliapi.herokuapp.com/films");
  let data = api.data;
  let select = document.getElementById("select");
  let section = document.getElementById("display-info");
  let h3 = document.createElement("h3");
  let year = document.createElement("p");
  let description = document.createElement("p");
  let ul = document.getElementById("review");
  let input = document.getElementById("input");
  let button = document.getElementById("submit");
  data.forEach((film) => {
    let option = document.createElement("option");
    option.textContent = film.title;
    option.value = film.title;
    select.appendChild(option);
    select.addEventListener("change", (event) => {
      if (film.title === event.target.value) {
        h3.textContent = film.title;
        section.appendChild(h3);
      }
      if (film.title === event.target.value) {
        year.textContent = film.release_date;
        section.appendChild(year);
      }
      if (film.title === event.target.value) {
        description.textContent = film.description;
        section.appendChild(description);
      }
    });
  });
  button.addEventListener("click", () => {
    data.forEach((film) => {
      if (film.title === select.value) {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let str = film.title;
        p.innerHTML = `<strong>${str}:</strong> ${input.value}`;
        li.appendChild(p);
        ul.appendChild(li);
      }
    });
  });
};
