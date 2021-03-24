const select = document.querySelector("select");
const display =document.querySelector("#display-info");
const main =document.querySelector("main");
const mvTitle = document.querySelector("h3");
const form = document.querySelector("form");
const filmDescription= document.querySelector("#film-description");
const release =document.querySelector("#release-year");
const ul = document.querySelector("#reviews");
const input =document.querySelector("#review");
const findMovies = async()=>{
    try{
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    response.data.forEach(film => {
      const option =document.createElement('option');
      const title =film.title;
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

form.addEventListener("submit", (e)=>{
   e.preventDefault() 
   if(mvTitle.textContent!== ""){
   const li =document.createElement("li")
  li.textContent =`<b>${mvTitle.textContent}:</b> ${review.value}`
 ul.appendChild(li)
 input.value = '';
   }
})
select.addEventListener("change", async(e)=>{
const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
mvTitle.textContent =res.data.title
release.textContent=res.data.release_date;
filmDescription.textContent=res.data.description
} )