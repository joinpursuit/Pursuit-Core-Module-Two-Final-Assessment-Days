let main = document.querySelector("main");
let title = document.getElementById("title");
let release = document.getElementById("release-year");
let description = document.getElementById("description");
let select = document.getElementById("select");
let submit = document.getElementById("submit");
let input = document.getElementById("input");
let list = document.getElementById("list");
let message = document.createElement("p");
message.setAttribute("id", "error");
let catchError = "An error has occurred. Please try again later.";

async function ghibliMovies() {
  try {
    let info = await axios.get("https://ghibliapi.herokuapp.com/films");
    let catcher = info.data;
    catcher.forEach((movie) => {
      let film = document.createElement("option");
      film.value = movie.id;
      film.textContent = movie.title;
      select.appendChild(film);
    });
  } catch {
    message.textContent = catchError;
    main.appendChild(message);
  }
}
select.addEventListener("change", async (movie) => {
  try {
    let info = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${movie.target.value}`
    );
    title.textContent = info.data.title;
    release.textContent = info.data.release_date;
    description.textContent = info.data.description;
  } catch {
    message.textContent = catchError;
    main.appendChild(message);
  }
});
submit.addEventListener("submit", (form) => {
  form.preventDefault();
  if (select.selectedIndex != 0) {
    let li = document.createElement("li");
    li.innerHTML = `<b>${title.textContent}: </b> ${input.value}`;
    list.appendChild(li);
    message.textContent = "";
  } else {
    message.textContent = "Please select a movie to review.";
    main.appendChild(message);
  }
  submit.reset();
});
ghibliMovies();
