document.addEventListener('DOMContentLoaded', evnt => {
    evnt.preventDefault()
    const reviewList = document.querySelector('ul')
    const selection = document.querySelector('select')
    const reviewed  = document.getElementById('reviewed')
    const form = document.querySelector('form')
    let releaseYear = document.getElementById('release-year')
    let description = document.getElementById('description')
    let title = document.querySelector('h3')  

    async function getFilms (){
        try {
            const body = await axios.get('https://ghibliapi.herokuapp.com/films')
            let films = body.data
            films.forEach(film => {
                let option = selection.appendChild(document.createElement('option'))
                option.value = film.title
                option.textContent = film.title
                option.id = film.id          
            })        
        } catch (e) {
        console.log(e.message)
        }
    }


    getFilms()


    selection.addEventListener('change', vnt =>{
        vnt.preventDefault()
        document.querySelectorAll('option').forEach(opt => {
            if(opt.selected === true ){
                if(opt.value === ''){    
                    title.textContent = ''
                    releaseYear.textContent = ''
                    description.textContent = ''
                } else {
                    title.textContent = opt.value
                    fetch(`https://ghibliapi.herokuapp.com/films/${opt.id}`)
                    .then(response =>response.json())
                    .then( movie =>{
                    releaseYear.textContent = movie['release_date']
                    description.textContent = movie.description
                    }).catch((e) =>{
                        console.log(e.message)
                    })
                }
               
            }
        })
       
    })



    form.addEventListener('submit', evntt =>{
        evntt.preventDefault()
        let review = document.createElement('li')
        review.innerHTML = `<b>${title.textContent}:</b> ${reviewed.value}`
        reviewList.appendChild(review)
        reviewed.value = ''
    })


  
})



