const url = "https://ghibliapi.herokuapp.com/films";
const moviesTitles = document.querySelector("#moviesTitles");
const reviewTextBox = document.querySelector("#reviewText");

const loadMovies = async () => {
    try{
        let response = await axios.get(url);
        for(let movie of response.data){
            let opt = document.createElement("option");
            opt.innerHTML = movie.title;
            moviesTitles.appendChild(opt);
        }
    }catch(err){
        alert(`Something went wrong: ${err.message}`);
    }
}

loadMovies();

const getMovie = () => {
    document.querySelector("#display-info h3").innerHTML = "";
    let selectedMovie = 
    moviesTitles.value;
    document.querySelector("#display-info h3").innerHTML = selectedMovie;
    return selectedMovie; 
    
}



const getMovieInfo = async () => {
    try{
        let response = await axios.get(`${url}?title=${getMovie()}`);
        document.querySelector("#release_year")
        .innerHTML = response.data[0].release_date;
        document.querySelector("#description")
        .innerHTML = response.data[0].description;
        
    }catch(err){
        alert(`Something went wrong: ${err.message}`);
    }
}

moviesTitles.addEventListener('change', getMovieInfo);


const submitReview = () => {
    let reviewText = reviewTextBox.value;
    let list = document.querySelector("#reviewList");
    let listItem = document.createElement("li");
    listItem.innerHTML = "<strong>"
    +moviesTitles.value+": </strong>"+reviewText;
    list.appendChild(listItem);
}


document.querySelector("#submitReview").addEventListener('click', (e) => {
    submitReview();
    reviewTextBox.value = "";
    e.preventDefault();
});