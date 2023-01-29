// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// const getNewDog = () => {
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//             // console.log(json.message)
//             dogImageDiv.innerHTML = `<img src="${json.message}" height=300 width=300 alt="dog" />`
//         })
//     }

    // dogButton.onclick = () => getNewDog()

    const getDog = async () => {
        const url = 'https://dog.ceo/api/breeds/image/random'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    getDog()