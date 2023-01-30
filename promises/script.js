// const getSoup = async () => {
//     const url = ''
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getSoup()


// const getSoup = async () => {
//     const soup = promise1
//     console.log(soup)
// }

// getSoup()

// 1. create a function
// 2. use async 
// 3. use await
const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getDog()
