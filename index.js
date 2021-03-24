console.log(ghibliData.data)
const movies = document.querySelector('#titles')

async function ghibliData () {
    const ghibliResults = await axios.get("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    const ghibliData = ghibliResults.data
    for (let titles of ghibliData) {
        const info = helper(titles)
        movies.appendChild(info)
    }
}



// function helper(titles) {
   function submitReview(){

   }