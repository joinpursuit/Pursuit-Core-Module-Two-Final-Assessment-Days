console.log("do it live")

async function getMovie() {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    console.log(res)
    const apiResults = res.data
    for (let movie of apiResults) {
        // console.log(movie)
        const myMovieList = document.getElementById("movies")
    const option = document.createElement("option")
    option.text = movie.title
    myMovieList.add(option)
    console.log(movie)
    }
}
getMovie()

const form = document.querySelector('#user-form')
form.addEventListener('submit', (event) =>{
    // event.preventDefault()
    console.log("sdf")
})

 // const showTitle = document.querySelector(".movies")
    // showTitle.addEventListener('click', () =>{
        
    //     console.log("it works")
        // showTitle.textContent = option
    // })

// function showMovieInfo(movie) {
//     //get info from api
//     //use api info to populate section

// }

// function helperFunction(film) {
//     const option = document.createElement('option')
//     option.textContent = movie.title
//     option.appendChild


//     return option
// }
// const showTitle = document.querySelector("#movies")
//     showTitle.addEventListener('click', (event) =>{
//         const film =document.querySelector("#movie-title")
//         film.textContent = "almost"
//         console.log("it works")
//         // showTitle.textContent = option
//     })



//loop through array of movies
    //use the value of the movie to correspond to the value of an option
    //based on the index of the option number i will append a child that has all info in the section below
//when a movie is selected from the select drop down a the info will appear in the blank section


//     const myMovieList = document.getElementById("movies")
    // const option = document.createElement("option")
    // option.text = movie.data.title
    // myMovieList.add(option)
        // const item = movieList(movie)
        // console.log(item) 
        // 

        // const title = document.querySelector("#display-info h3")
        // const release = document.querySelector("#display-info p:first-of-type")
        // const description = document.querySelector("#display-info p:last-of-type")


        