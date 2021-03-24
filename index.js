//select box that contains the title of each movie in the API (done)
//when change populate the section "#display-info"
//when change again repopulate with new info
//<option> element should have a value attribute containing the data value to submit to the server when that option is selected.the value defaults to the text contained inside the element.
// in section
//create h3(title), and release year (p), and description (p), within the section "#display-info" of single film
//form allows users to submit (not save, just add to the frontend) a review of that film. On submission the input should clear.
//upon submission new li appended to the ul: title(bold): review

const select = document.querySelector("#select");
const displayInfo = document.querySelector("#display-info");
const form = document.querySelector("#form");
// const div = document.querySelector("#movie")

const listReviews = document.querySelector("#reviews");


form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const currentMovieTitle = 'idk'
  const comment= document.querySelector('input[type=text]').value

  const li = document.createElement("li")
  li.innerHTML = `<strong>${currentMovieTitle}:</strong> ${comment}`

  listReviews.appendChild(li)
})


async function getMovieTitles() {
  try {
    const res = await axios.get(" https://ghibliapi.herokuapp.com/films");
    const movies = res.data;
    console.log(movies);
    for (let movie of movies) {
      const option = makeOption(movie);
      // console.log(option)
    }
  } catch (error) {
    console.log(error);
  }
}

function makeOption(movie) {
  const option = document.createElement("option");
  option.textContent = movie.title;
  option.value = movie.id;
  select.appendChild(option);

  option.addEventListener("change", (e) => {
    // e.preventDefault()
    console.log("I changed");
    if (e.target.value === "change") {
      const title = document.createElement("h3");
      title.textContent = movie.title;
      displayInfo.appendChild(title);

      const releaseYear = document.createElement("p");
      releaseYear.textContent = movie["release_date"];
      displayInfo.appendChild(releaseYear);

      const description = document.createElement("p");
      description.textContent = movie.description;
      displayInfo.appendChild(description);
    }
  });
}

getMovieTitles();
