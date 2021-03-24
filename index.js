const selectOption = document.querySelector("select");

async function getFilms(){
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    const getResult = res.data
    console.log(res.data)
    for(let film of getResult){
        const item = addOptions(film)
        selectOption.appendChild(item)
    }
}

function addOptions(film){
    const filmOptions = document.createElement("option");
    filmOptions.text = film.title
    

    return filmOptions
}

getFilms()