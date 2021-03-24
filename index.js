document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#movie-review");
  const reviewList = document.querySelector("#movie-review-ul");
  const options = document.querySelector("select");
  const choice = document.querySelector("#movie-titles");
  const title = document.querySelector("#title");
  const year = document.querySelector("#release-year");
  const description = document.querySelector("#description");


  const getTitles = async () => {
    try {
      response = await axios.get("https://ghibliapi.herokuapp.com/films");
      allMovies = response.data;
   
       
       allMovies.forEach(movie => { 
           console.log(allMovies)
           const option = document.createElement("option");
        option.textContent = movie.title;
        option.value = movie.id;
        options.appendChild(option);

        
       })
        
    
    } catch (err) {
      console.log("Achtung, we got an error", err);
    }
  };

  getTitles();


  options.addEventListener("change", (e) => {
    console.log(e.target.value);
  fetch(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
  .then(response => {
      if(!response.ok) {
          throw Error("Achtung, we got an error: ", Error);
      } return response.json()
  })
  .then(currentMovie => {
      title.textContent = currentMovie.title
      year.textContent = currentMovie.release_date
      description.textContent = currentMovie.description

  })




  
  });




  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const review = document.querySelector("#review").value;
    const newReview = document.createElement("li");

    if (review) {
      newReview.innerHTML = `<b>${title.textContent}: </b> ${review}`;
      reviewList.appendChild(newReview);
      form.reset()
    } else {
      newReview.innerHTML = `<b>${title.textContent}: </b> This is the best movie I've ever seen`;
      reviewList.appendChild(newReview);
     form.reset()
    }
  });
});
