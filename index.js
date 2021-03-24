//select box that contains the title of each movie in the API (done)
//when change populate the section "#display-info"
//when change again repopulate with new info
//<option> element should have a value attribute containing the data value to submit to the server when that option is selected.the value defaults to the text contained inside the element.
//option value stored

// in section
//create h3(title), and release year (p), and description (p), within the section "#display-info" of single film
//form allows users to submit (not save, just add to the frontend) a review of that film. On submission the input should clear.
//upon submission new li appended to the ul: title(bold): review

const select = document.querySelector("#filmTitles");
const section = document.querySelector("#display-info");
const form = document.querySelector("#form");

const listReviews = document.querySelector("#reviews");

async function getFilmTitles() {
  try {
    const res = await axios.get(" https://ghibliapi.herokuapp.com/films/");
    const films = res.data;
    for (let film of films) {
      const selectOption = makeSelectOption(film);
      select.appendChild(selectOption);
    }
  } catch (error) {
    console.log(error);
  }
}

function makeSelectOption(film) {
  const option = document.createElement("option");
  option.textContent = film.title;
  option.value = film.id;
  select.appendChild(option);

  const title = document.createElement("h3");
  const releaseYear = document.createElement("p");
  const description = document.createElement("p");
  title.textContent = film.title;
  releaseYear.textContent = film["release_date"];
  description.textContent = film.description;

  // console.log(title,releaseYear,description)

  select.addEventListener("change", (e) => {
    e.preventDefault();
    section.textContent = "";


    let target = e.target.value;
    console.log(target);
    // console.log(title,releaseYear,description)

    section.appendChild(title);
    section.appendChild(releaseYear);
    section.appendChild(description);
  });

  return option;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getFilmTitles();
  const currentFilmTitle = document.querySelector("h3");
  const comment = document.querySelector("input[type=text]").value;
  const submit = document.querySelector("input[type=submit]");

  const li = document.createElement("li");
  li.innerHTML = `<strong>${currentFilmTitle}:</strong> ${comment}`;

  listReviews.appendChild(li);

  comment.value = "";
  submit.value = "";
});
getFilmTitles();
