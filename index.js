// 


document.addEventListener('DOMContentLoaded', () => {
    const displayInfo = document.querySelector('#display-info')

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
            option.value = index
            option.textContent = title
            select.appendChild(option)
            index++
            console.log(option)
        }
        const form = document.querySelector('form')
        const comment = form.firstElementChild
        const ul = document.querySelector('ul')

        select.addEventListener('change', (event) => {
            let movie = newArr[event.target.value]
            titleBox.textContent = movie.title
            descriptionBox.textContent = movie.description
            yearBox.textContent = movie.release_date
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            // let title = document.querySelector('#display-info h3').textContent
            let val = select.value
            console.log(val)
            let movie = newArr[val]
            console.log(movie)
            let li = document.createElement('li')
            // li.innerHTML = `<b>${title}:</b> ${textInput.value}`
            li.innerHTML = `<b>${movie.title} - ${movie.original_title}:</b> ${comment.value}`
            ul.appendChild(li)

            form.reset()
        })

    }
    getFilms()

})