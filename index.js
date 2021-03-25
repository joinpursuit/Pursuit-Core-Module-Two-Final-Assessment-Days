
const selectBox = document.querySelector("#filmTitles");

const form = document.querySelector("#form");

const listReviews = document.querySelector("#reviews");

//SECTIONBOX
const section = document.querySelector("#display-info");
const title = document.querySelector("#title");
const releaseYear = document.querySelector("#release-year");
const decription = document.querySelector("#release-year");


async function getFilmTitles() {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
    const films = res.data;
    console.log(films);
    makeOptions(films);
  } catch (error) {
    console.log(error);
  }
}

function makeOptions(films) {
  for (let film of films) {
    const option = document.createElement("option");
    option.textContent = film.title;
    option.id= `${film.release_date}`
    option.value =`${film.description}`;
    selectBox.appendChild(option);
  }
  selectBox.addEventListener("change", displayInfo)
}

function displayInfo(event) {
  const selectedOption = selectBox.options[selectBox.selectedIndex]

  title.textContent = selectedOption.textContent
  releaseYear.textContent = selectedOption.id
  description.textContent = selectedOption.value

  section.appendChild(title)
  section.appendChild(releaseYear)
  section.appendChild(description)
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input[type=text]");
  const comment = input.value 

  const li = document.createElement("li");
  li.innerHTML = `<strong>${title.textContent}:</strong> ${comment}`;

  listReviews.appendChild(li);

  input.value = "";

});
getFilmTitles();

