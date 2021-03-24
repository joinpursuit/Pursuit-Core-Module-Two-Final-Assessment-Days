console.log("Good Luck on your test!");
let select = document.querySelector("select");
let section = document.getElementById("display-info");
let hThree = document.querySelector("h3");
let releaseYearP = document.querySelector("p");
let title = ''

async function getTitle(e) {
    try{
   let movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");
    let list = movieList.data;
  
    for( let titles of list){
        // console.log(titles.title)
        const item= movieDetails(titles.title);
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
        let listOfMovieTitile = document.createElement("option")
        listOfMovieTitile.value= titles;
        listOfMovieTitile.text = titles;
        select.appendChild(listOfMovieTitile);
            hThree.innerText = titles;
            section.appendChild(hThree);
    }catch(err){console.log(err);}

    // return fileDescription
}

async function date(releaseDates){
    try{
        releaseYearP.textContent = releaseDates;
        section.appendChild(releaseYearP);
    }catch(err){console.log(err)}
}
async function movieDescription (description) {
    try{
        let fileDescription = document.createElement("p")
        fileDescription.textContent = description;
        releaseYearP.appendChild(fileDescription);
    }catch(err){console.log(err)}
}

getTitle()
// getDate()
// getDescription()