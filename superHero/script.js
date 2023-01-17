// https://superheroapi.com/api/access-token/character-id

// 3476019352682452


const SUPERHERO_TOKEN = '3476019352682452 '
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json
        showHeroInfo(superHero)
})
}

const showHeroInfo = (character) => {

    const name = `<h2>${character.name}</h2>`

    const img = `<img src='${character.image.url}' height=200 width=200 />`


    const stats = Object.keys(character.powerstats).map(stat => {
        return `<h4>${stat.toUpperCase()}: ${character.powerstats[stat]}</h4>`
    }).join('')

    // console.log(stats.join(''))
    console.log(name)

    heroImageDiv.innerHTML = `${name}${img}${stats}`
    // for (stat in character.powerstats) {
    //     console.log(stat)
    // }
}

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        showHeroInfo(hero)
        // console.log(hero)
        // let name = `<h2>${json.name}</h2>`
        // heroImageDiv.innerHTML = `${name}<img src='${hero.image.url}' height=200 width=200 />`
})
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}
newHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

