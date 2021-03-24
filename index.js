const selectOption = document.querySelector("select");
const submitBtn = document.querySelector("#submit");
const theForm = document.querySelector("form");
const commentUl = document.querySelector("ul");
const filmTitle = document.querySelector("h3");
const filmYear = document.querySelector("p:first-of-type");
const filmDescription = document.querySelector("p:last-of-type");


async function getFilms(){
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const getResult = res.data
    
    getResult.forEach(film => {
        const filmOptions = document.createElement("option");
        filmOptions.textContent = film.title
        filmOptions.value = film.id
        selectOption.appendChild(filmOptions)
    });
}

    selectOption.addEventListener("change", async (event)=>{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
        filmTitle.textContent = res.data.title
        filmYear.textContent = res.data.release_date
        filmDescription.textContent = res.data.description
    
    });
    

theForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const textInput = document.querySelector("#text").value;
    const commentLi = document.createElement("li");
    commentLi.innerHTML = `<strong>${filmTitle.textContent}:</strong> ${textInput}`
    commentUl.appendChild(commentLi)

    const input = document.querySelector("input")
    input.value = ""
})


getFilms()

