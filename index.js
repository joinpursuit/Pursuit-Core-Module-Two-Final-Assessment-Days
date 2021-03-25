//select box that contains the title of each movie in the API (done)
//when change populate the section "#display-info"
//when change again repopulate with new info
//<option> element should have a value attribute containing the data value to submit to the server when that option is selected.the value defaults to the text contained inside the element.
//option value stored

// in section
//form allows users to submit (not save, just add to the frontend) a review of that film. On submission the input should clear.
//upon submission new li appended to the ul: title(bold): review

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

