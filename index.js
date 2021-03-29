const select = document.querySelector("select");
const display =document.querySelector("#display-info");
const main =document.querySelector("main");
const mvTitle = document.querySelector("#movie-title");
const form = document.querySelector("form");
const filmDescription= document.querySelector("#film-description");
const release =document.querySelector("#release-year");
const ul = document.querySelector("#reviews");
const input =document.querySelector("#text-input");
//Async/await is, like promises, non blocking.
//Async/await makes asynchronous code look and behave a little more like synchronous code.
const findMovies = async()=>{
    try{
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    //The forEach() method executes a provided function once for each array element.
    response.data.forEach(film => {
      const option =document.createElement('option');
      const title =film.title;
      //while innerText returns the content of all elements
      option.innerHTML =title;
      option.value =film.id;
      select.appendChild(option)
    })
}
    catch(err){
        console.log(err);
    };
    };

findMovies();
//The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the
/*
Use the form, below the movie information, 
to submit a review. Each review should be a new li,
 with the selected film's
 title (in bold) and a review body (not bold).
*/
form.addEventListener("submit", (e)=>{
   e.preventDefault() 
   const li =document.createElement("li")
   //The textContent property sets or returns the text content of the specified node, and all its descendants.
   li.innerHTML = `<b>${mvTitle.textContent}:</b> ${input.value}`
  //li.textContent =`<b>${mvTitle.textContent}:</b> ${review.value}`
 ul.appendChild(li)
 input.value = '';
   
})
/*
Use the select box to select a specific film. When they select a film, 
information about that film (title, release year, description) should populate 
in the display-info section below. When they select a different film,
 this information should be replaced.
*/
select.addEventListener("change", async(e)=>{
const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
mvTitle.textContent =res.data.title
release.textContent=res.data.release_date;
filmDescription.textContent=res.data.description
} )