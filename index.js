//select box that contains the title of each movie in the API (done)
    //when change populate the section "#display-info"
    //when change again repopulate with new info
    //<option> element should have a value attribute containing the data value to submit to the server when that option is selected.the value defaults to the text contained inside the element.
// in section
    //create h3(title), and release year (p), and description (p), within the section "#display-info" of single film 
//form allows users to submit (not save, just add to the frontend) a review of that film. On submission the input should clear.
    //upon submission new li appended to the ul: title(bold): review

const select = document.querySelector("#select")
const movieInfo = document.querySelector("#display-info")
const form = document.querySelector("#form")

const listReviews = document.querySelector("#reviews")

async function getMovieTitles (){
    try {
        const res = await axios.get(" https://ghibliapi.herokuapp.com/films")
        const movies = res.data
        console.log(movies)
        for( let movie of movies){
           makeTitleOption(movie)
        }
    } catch (error) {
        console.log(error)        
    }
}
function makeTitleOption (movie){
    const option = document.createElement("option")
    option.textContent = movie.title
    select.appendChild(option)
}
function 
getMovieTitles()