console.log("Good Luck on your test!");
let select = document.querySelector("#listItems");
let section = document.getElementById("display-info");
let hThree = document.querySelector("h3");
let year = document.querySelector("p");
let description = document.querySelector("#description")
let submit = document.querySelector("#review")
let insideText = document.querySelector("#innerText")
let title= document.querySelector("title")
let list = []




async function getMovieObj(e) {
    try{
   let movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");
   list = movieList.data;
    console.log(list)
    let text = movieDetails(list)

    } catch(err){console.log(err)}
}



 function movieDetails(titles) {
        for(let i=0; i<titles.length; i++){
            let option = document.createElement("option")
            option.value = i
            option.textContent= titles[i].title
            select.appendChild(option)
        }
         
}

   


select.addEventListener('change', (e)=>{
    hThree.textContent=e.target.title;
    year.textContent=list[e.target.value].release_date
    description.textContent= list[e.target.value].description
    title.textContent=e.target.title
})

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    let li = document.createElement("li");
    let ul = document.querySelector("ul");
    let movSelect = document.getElementById("listItems")
    let collection = movSelect.options[movSelect.selectedIndex].text;
   li.innerHTML=`<b>${collection}. ${insideText.value}</b>`;
   console.log(collection)
   ul.appendChild(li)
   insideText.innerText = "";
   let form = document.getElementById("myForm")
   form.reset();
})

    
getMovieObj()




