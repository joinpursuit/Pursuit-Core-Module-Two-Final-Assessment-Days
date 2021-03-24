let select = document.querySelector("select")
let review = document.querySelector("#text")
let section = document.querySelector("#display-info")
let form = document.querySelector("form")
let ul = document.querySelector("ul")

const getFilms = async () => {
    
    try {
        
        let res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        
        res.data.forEach((el) => {
            let option = document.createElement("option")
            option.value = el.id
            option.text = el.title
            select.appendChild(option)
        })

    } catch (error) {
        console.log(error)
    }
}
getFilms()

select.addEventListener("change", async (event) => {
    
    try {
        let res = await axios.get(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)

        let title = document.createElement("h3")
        let release  = document.createElement("p")
        let description  = document.createElement("p")

        title.innerText = res.data.title
        release.innerText = res.data.release_date
        description.innerText = res.data.description
    
        section.innerText = ""
        
        section.appendChild(title)
        section.appendChild(release)
        section.appendChild(description)
    } catch (error) {
        
    }
})

form.addEventListener("submit", event => {
    event.preventDefault()

    let title = document.querySelector("h3")
    let li = document.createElement("li")
    li.innerHTML = `<strong>${title.innerText}.</strong> ${review.value}`
    ul.appendChild(li)
    review.value = ""
})
