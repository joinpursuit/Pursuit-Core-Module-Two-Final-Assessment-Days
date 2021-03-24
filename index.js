let main = document.querySelector("main")
let title = document.getElementById("title")
let release = document.getElementById("release-year")
let description = document.getElementById("description")
let select = document.getElementById("select")
let submit = document.getElementById("submit")
let input = document.getElementById("input")
let list = document.getElementById("list")
let errorMessage = "Seems that we've hit a bit of a snag. Please try again later."


const getMovies = async () => {

    try{  
        let info = await axios.get("https://ghibliapi.herokuapp.com/films")
        let data = info.data

        data.forEach(point =>{
            let option = document.createElement("option")
            option.value = point.id
            option.textContent = point.title
            select.appendChild(option)   
        })

    } catch{
        let message = document.createElement("p")
        message.classList.add("error")
        message.textContent = errorMessage
        main.insertBefore(message, main.firstElementChild.nextSibling)
    }

}


select.addEventListener("change", async (e) => {

    try{
        let info = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
        console.log(info)

        title.textContent = info.data.title
        release.textContent = info.data.release_date
        description.textContent = info.data.description
    } catch{
        let message = document.createElement("p")
        message.classList.add("error")
        message.textContent = errorMessage
        main.insertBefore(message, main.firstElementChild.nextSibling)
    }

})


submit.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if (select.selectedIndex > 0){
    let listItem = document.createElement("li")
    listItem.innerHTML =`<b>${title.textContent}:</b> ${input.value}`
    list.appendChild(listItem)
    }

    submit.reset()
 
})


getMovies()
