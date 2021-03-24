document.addEventListener('DOMContentLoaded', () => {
    getMovies()
    async function getMovies() {
        let result = await axios.get("https://ghibliapi.herokuapp.com/films")
        const listFromAPI = result.data
        console.log(result.data)
        const selectList = document.querySelector('select')

        listFromAPI.forEach(el => {
            const selectItem = document.createElement("option")
            // selectItem.id = 
            selectItem.innerHTML = el.title
            selectList.appendChild(selectItem)


            //display info
        })
        selectList.addEventListener('input', (event) => {
            const display = document.querySelector("#display-info")
                display.style.visibility = "visible"
            const tempTitle = event.target.value
            const name = document.querySelector("#title")
            const release = document.querySelector("#release-year")
            const description = document.querySelector("#description")
            name.innerHTML = tempTitle
            listFromAPI.forEach(el => {
                if (el.title === tempTitle) {
                    release.innerHTML = `<strong>Release Date:</strong> ${el.release_date}`
                    description.innerHTML = `<strong>Description:</strong>${el.description}`
                    console.log(tempTitle)
                }
            })
        })
        // submision form 
        const form = document.querySelector("form")
        const inputValue = document.querySelector(".inputValue")
        const ul = document.querySelector("#reviewList")
        const title = document.querySelector("#title")
        console.log(form)
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const li = document.createElement('li')
            li.innerHTML = `<strong>${title.textContent}:</strong> ${inputValue.value}`
            ul.appendChild(li)
            inputValue.value = ""
        })
    }
})
// formSubmision.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const li = document.createElement('li')
//     li.innerHTML = `<strong>${nameH3.textContent}:</strong> ${inputValue.value}`
//     storyBoard.appendChild(li)
//     inputValue.value = ""