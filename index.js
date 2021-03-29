// 


document.addEventListener('DOMContentLoaded', () => {
    async function getFilms() {
        const res = await axios.get('https://ghibliapi.herokuapp.com/films')
        const filmsArr = res.data
        console.log(filmsArr)


        const select = document.querySelector('select')
        const titleBox = document.getElementById('title-box')
        const yearBox = document.getElementById('year-box')
        const descriptionBox = document.getElementById('description-box')
        
        let newArr = []
        for (let film of filmsArr) {
            newArr.push(film)
        }

        let index = 0
        for (let film of newArr) {
            let title = film.title
            let option = document.createElement('option')
            // option.value = film.id
            option.value = index
            option.textContent = title
            select.appendChild(option)
            index++
        }
        const form = document.querySelector('form')
        const textInput = form.firstElementChild
        const btn = form.lastElementChild
        const ul = document.querySelector('ul')

        select.addEventListener('change', (event) => {
            let movie = filmsArr[event.target.value]
            titleBox.textContent = movie.title
            descriptionBox.textContent = movie.description
            yearBox.textContent = movie.release_date
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let title = document.querySelector('#display-info h3').textContent
            console.log(title)
            let li = document.createElement('li')
            li.innerHTML = `<b>${title}:</b> ${textInput.value}`
            ul.appendChild(li)
            form.reset()
        })

    }
    getFilms()

})