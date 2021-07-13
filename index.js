const allMovies = document.querySelector("#options");
const submit = document.querySelector("submit");
const releaseD = document.querySelector("p:first-of-type");
const descriptions = document.querySelector("p:last-of-type");
const form = document.querySelector("form");
const title = document.querySelector("h3");
// const display = document.querySelector("#display-info");

const getMovies = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    res.data.forEach((film) => {
      const choices = document.createElement("option");
      choices.textContent = film.title;
      choices.value = film.id;
      allMovies.appendChild(choices);
    });
  } catch (err) {
    console.log(err);
  }
};

allMovies.addEventListener("change", async (e) => {
  const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`);
  // const res = await axios.get(url);
  title.textContent = res.data.title;
  releaseD.textContent = res.data.release_date;
  descriptions.textContent = res.data.description;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const review = document.querySelector("input[type=text]").value;
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  li.innerHTML = `<b>${title.textContent}:</b> ${review}`;
  ul.appendChild(li);
  const input = document.querySelector("input");
  input.value = "";
  form.reset();
});

getMovies();
