// color squares

// redDiv = document.getElementById('red')
// redDiv.style.backgroundColor = 'red'

// greenDiv = document.getElementById('green')
// greenDiv.style.backgroundColor = 'green'

// blueDiv = document.getElementById('blue')
// blueDiv.style.backgroundColor = 'blue'

// 🛑 ✌️ ✊ 
// redDiv.onclick = () => console.log('you click red')
// greenDiv.onclick = () => console.log('green')
// blueDiv.onclick = () => console.log('blue')

// const colorSquares = document.querySelectorAll('.square')
// // console.log(colorSquares[2].value)

// // forEach
// const timesClicked = {'red': 0, 'green': 0, 'blue': 0}
// colorSquares.forEach(colorSquare => {
//     colorSquare.onclick = () => {
//         timesClicked[colorSquare.value]  ++
//         colorSquare.innerText = timesClicked[colorSquare.value]
        // console.log(colorSquare.value)
//     }
// })

// function clearScores() {
//     timesClicked.red = 0
//     timesClicked.green = 0
//     timesClicked.blue = 0
//     colorSquares.forEach(colorSquare => {
//         colorSquare.innerText = 0
//     })
//     // colorSquares.forEach(colorSquare => colorSquare.value = '')
// }

// const clearGameBtn = document.getElementById('clear-game')
// clearGameBtn.onclick = () => clearScores()




// tip calculator
/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document .getElementById('numberOfPeople')
const perPersonTotalDiv = document .getElementById('perPersonTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)
  
    // get the tip from user & convert  it into a percentage (divide by 100)
    const tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    const tipAmount = bill * tipPercentage
  
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
  
    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
  
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople ++
  
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
  
    // calculate the bill based on the new number of people
    calculateBill()
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
        return
    }
    
    // decrement the amount of people
    numberOfPeople --

  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()

  
    // calculate the bill based on the new number of people
  
  }
