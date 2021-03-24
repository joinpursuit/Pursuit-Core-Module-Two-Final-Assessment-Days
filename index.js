// 


document.addEventListener('DOMContentLoaded', () => {

    async function getFilms() {
        
        const filmsArr = await axios.get('https://ghibliapi.herokuapp.com/films')
        .then((body) => {return body.data})

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

        }
        let option = document.querySelector('option')
        select.addEventListener('change', () => {
            let value = option.value
            console.log(value)
        })




    }
    getFilms()

})