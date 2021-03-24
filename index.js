const selectOption = document.querySelector("select");
const submitBtn = document.querySelector("#submit")
const filmTitle = document.querySelector("h3");
const filmYear = document.querySelector("#release-year");
const filmDescription = document.querySelector("#description");

async function getFilms(){
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const getResult = res.data
    console.log(getResult)
    for(let film of getResult){
        const item = addOptions(film)
        selectOption.appendChild(item)
    }
}

function addOptions(film){
    const filmOptions = document.createElement("option");
    filmOptions.text = film.title
    filmOptions.value = film.title
    
    selectOption.addEventListener("change", ()=>{
        function selectOptions(){
            filmTitle.textContent = selectOption.value
            filmYear.textContent = film.release_date
        }
        selectOptions()
    });
    
    return filmOptions
}







getFilms()