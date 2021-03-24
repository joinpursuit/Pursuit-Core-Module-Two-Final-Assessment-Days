const selectOption = document.querySelector("select");
const submitBtn = document.querySelector("#submit");
const theForm = document.querySelector("form");
const commentUl = document.querySelector("ul");


async function getFilms(){
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const getResult = res.data
   
    getResult.forEach(film => {
        const item = addOptions(film)
        selectOption.appendChild(item)
        
    });
}

function addOptions(film){
    const filmOptions = document.createElement("option");
    filmOptions.text = film.title
    
    selectOption.addEventListener("change", ()=>{
        selectOptions()
    });
    
    function selectOptions(){
        const filmTitle = document.querySelector("#display-info h3");
        const filmYear = document.querySelector("#display-info p:first-of-type");
        const filmDescription = document.querySelector("#display-info p:last-of-type");
        filmTitle.textContent = selectOption.value
        filmYear.textContent = film.release_date
        filmDescription.textContent = film.description
    }

    
    return filmOptions
}


theForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const textInput = document.querySelector("#text").value;
    const commentLi = document.createElement("li");
    commentLi.textContent = `${textInput}`
    commentUl.appendChild(commentLi)
})





getFilms()