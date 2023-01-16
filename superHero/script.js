// https://superheroapi.com/api/access-token/character-id

// 3476019352682452


const SUPERHERO_TOKEN = '3476019352682452 '
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.querySelector('body').innerHTML += `<img src='${json.image.url}' height=200 width=200 />`
})
}
newHeroButton.onclick = () => getSuperHero(50)

