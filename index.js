console.log("Good Luck on your test!");
let select = document.querySelector("#listItems");
let section = document.getElementById("display-info");
let hThree = document.querySelector("h3");
let releaseYearP = document.querySelector("p");
let ul = document.querySelector("ul");

// let title = ''
console.log(select.value + "hi")

async function getTitle(e) {
    try{
   let movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");
    let list = movieList.data;
  
    for( let titles of list){
        // console.log(titles.title)
        const item= movieDetails(titles.title);
        console.log(item)
    }
    } catch(err){console.log(err)}
}

async function getDate(e) {
    try{
   let movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");
    let list = movieList.data;

    for( let releaseDates of list){
        const item = date(releaseDates.release_date);
        // console.log(item)
    }
    } catch(err){console.log(err)}
}

async function getDescription(e) {
    try{
   let movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");
    let list = movieList.data

    for(let descriptions of list){
        const description= movieDescription(descriptions.description);
    }
    } catch(err){console.log(err)}
}

async function movieDetails(titles) {
    try{
        // console.log(titles)
        let listOfMovieTitile = document.createElement("option")
        listOfMovieTitile.value= titles;
        listOfMovieTitile.text = titles;
        select.appendChild(listOfMovieTitile);
            hThree.innerText = "select.value";
            section.appendChild(hThree);
            // listOfMovieTitile.addEventListener("click", ()=>{
            //     hThree.innerText = select.value;
            //     section.appendChild(hThree);
            // })
    }catch(err){console.log(err);}

    // return fileDescription
}

async function date(releaseDates){
    try{
        releaseYearP.textContent = releaseDates;
        section.appendChild(releaseYearP);
    }catch(err){console.log(err)}
}
async function movieDescription (descriptions) {
    try{
        let fileDescription = document.createElement("p")
        fileDescription.textContent = descriptions;
        releaseYearP.appendChild(fileDescription);
    }catch(err){console.log(err)}
}



    
getTitle()
getDate()
getDescription()
let listOfMovieTitile = document.createElement("select.value")
listOfMovieTitile.addEventListener("click", ()=>{
    hThree.innerText = select.value;
    section.appendChild(hThree);
})

// let userReview = document.getElementById("#review")
// console.log(userReview)
// userReview.addEventListener("click", submitReview)
// function submitReview(){
// let text = document.getElementById("#innerText")
// let li = document.createElement("li")
// writtenText = text.value;
// li.textContent = writtenText;
// ul.appendChild(li)

// }
