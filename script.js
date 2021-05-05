//let baseURL = 'https://images-api.nasa.gov/apod'
//let apiKey = 'FRCVMrJxAVsmPhcMP0N3YoZaLjqpgcNJ1HwgcHxd'
let apiURLwKey = 'https://api.nasa.gov/planetary/apod?api_key=FRCVMrJxAVsmPhcMP0N3YoZaLjqpgcNJ1HwgcHxd'
const searchDate = document.getElementById('search-date')
const nasa = document.getElementById('nasa')
const searchForm = document.getElementById('searchForm')

function fetchResults(e){
    e.preventDefault()

    fetch(`https://api.nasa.gov/planetary/apod?api_key=FRCVMrJxAVsmPhcMP0N3YoZaLjqpgcNJ1HwgcHxd&date=${searchDate.value}`) 
        .then(res => res.json())
        .then(json =>{
            displayPic(json)
        // console.log(json);
        // console.log(json.date);
        // console.log(json.explanation)
        // console.log(json.url);
        // console.log(json.title);
    })
    .catch(error => console.log(error))
}

function displayPic(p) {
    while (nasa.firstChild) {
        nasa.removeChild(nasa.firstChild);
    }


    let card = document.createElement('div')
    let cardBody = document.createElement('div') 
    let title = document.createElement('h5')           
    let explanation = document.createElement('p')

    nasa.setAttribute('class', 'card')
    title.setAttribute('class', 'cardtitle')
    explanation.setAttribute('class', 'card-text')

    explanation.innerText = p.explanation 
    title.innerText = p.title 

    nasa.appendChild(card)
    if (p.media_type == 'image') {
        let image = document.createElement('img')
        image.setAttribute('class', 'card-img-top')
        image.src = p.url
        card.appendChild(image)        
    } else if (p.media_type == 'video') { 
        let video = document.createElement('iframe')
        video.setAttribute('class', 'card-video-top')
        video.src = p.url
        card.appendChild(video)
    } else {
        return error()
    }
    card.appendChild(cardBody) 
    cardBody.appendChild(title) 
    cardBody.appendChild(explanation)

}

searchForm.addEventListener('submit', fetchResults)

function error(){
    alert('Please choose a date between June 16, 1995 and today.')
    image.removeChild
}