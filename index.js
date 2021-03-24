document.addEventListener('DOMContentLoaded', () => {
    const allMovies = document.querySelector('#select-button')
    //populate the scrollbar
    async function populateScroll () {
        const movieAPI = await axios.get("https://ghibliapi.herokuapp.com/films")
        let movieData = movieAPI.data
   
        for (let i = 0; i <= 20; i++) {
            let list = document.createElement('option')
            list.textContent = movieData[i].title
            allMovies.appendChild(list)
        }
        allMovies.addEventListener('change', () => {
            let optionChoice = allMovies.selectedIndex
            console.log(optionChoice)
            let title = document.querySelector('#title-name')
            let year = document.querySelector('#year')
            let description = document.querySelector('#description')
            title.textContent = movieData[optionChoice - 1].title
            year.textContent = movieData[optionChoice - 1].release_date
            description.textContent = movieData[optionChoice - 1].description
            const hidden = document.querySelector('form')
            hidden.classList.remove('hidden')

    
        })
        const comment = document.querySelector('form')
        comment.addEventListener(('submit'), (event) => {
            event.preventDefault()
            const titleName = document.querySelector('#title-name')
            const commentInput = document.querySelector('input[type="text"]') //to get the input text from a submit textbox
            const commentarea = document.querySelector('#comment-display')
            titleValue = titleName.textContent
            commentValue = commentInput.value
            const newComment = document.createElement('li')
            newComment.classList.add('comment-area')
            newComment.innerHTML = `<b>${titleValue}: </b>${commentValue}`
            commentarea.appendChild(newComment)
            commentInput.value = ""
        })
    
    
    }


    populateScroll()
    





    

})

