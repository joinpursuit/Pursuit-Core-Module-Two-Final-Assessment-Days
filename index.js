const titles = document.querySelector('select')
const form = document.querySelector('form')
const section = document.getElementById('display-info')
const options = document.querySelector('option')
const h3 = document.querySelector('h3')
const p1 = document.getElementById('first')
const p2 = document.getElementById('second')
const ul = document.querySelector('ul')

document.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()

    form.addEventListener('submit', e =>{
        e.preventDefault()
        const input = document.querySelector('input[type=text')
        const newti = document.createElement('li')
        if(input){
            newti.innerHTML = `<b>${h3.textContent}: </b> ${input.value}`
            ul.appendChild(newti)
            form.reset()
        }else{
            newti.innerHTML = `<b>${h3.textContent}: </b> This is the best movie I've ever seen`
            ul.appendChild(newti)
            form.reset()
        }
        
    })

        async function ghiblIpa(){
            let result = await axios.get('https://ghibliapi.herokuapp.com/films')
            const infoResult = result.data
            console.log(infoResult)

        infoResult.forEach(el => {
                const asa = document.createElement('option')
                asa.textContent = el.title
                asa.value = el.id
                titles.appendChild(asa)

        });
        titles.addEventListener('change', (e)=>{
            e.preventDefault()
            fetch(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
            .then((response) => {  
                    return response.json(); 
            }).then((currentMovie) => { 
                h3.textContent = currentMovie.title;      
                p1.textContent = currentMovie.release_date;      
                p2.textContent = currentMovie.description;   
            });});
            
            
            
            
            
            
            }
            ghiblIpa()
    
    
})

   
    

        



    
    
    
