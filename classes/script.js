class Bank {
    constructor(balance) {
        this.balance = balance
    }

    withdraw(amount) {
        // guard clause
        if(this.balance - amount <= 0) {
            console.log(':error: low account balance  ')
        }
        this.balance -= amount
        console.log('withdrew', `$${amount}`)
        console.log({balance: this.balance})

    }

    deposit(amount) {
        this.balance += amount
        console.log('deposited', `$${amount}`)
        console.log({balance: this.balance})
    }
}

const sarahChecking = new Bank(100)
console.log(sarahChecking.balance)
sarahChecking.deposit(100);
sarahChecking.withdraw(100);
sarahChecking.withdraw(100);
sarahChecking.withdraw(500);

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')

depositButton.onclick = () => {
    sarahChecking.deposit(amountInput.value)
    console.log(amountInput.value)
}

// class Car {
//     constructor(name, color, topSpeed, currentSpeed) {
//         // properties
//         this.name = name
//         this.color = color
//         this.topSpeed = topSpeed
//         this.currentSpeed = 0
//     }

//     // getters & setters
//     getCurrentSpeed() {
//         return currentSpeed
//     }

//     zeroToSixty () { 
//         setTimeout(() => {
//             console.log('phew!!, that was fast')
//             this.currentSpeed = 50;
//             // console.log(this.currentSpeed)
//         })
//     }

//     drive(speed) {
//         // console.log('two miles')
//         this.currentSpeed += 10
//         console.log(`driving speed at ${this.currentSpeed}`)
//     }

//     brake() {
//         this.currentSpeed -= 10
//         console.log('braking')
//         // console.log('brakes in')
//     }

//     stop() {
//         console.log('STOP')
//         this.currentSpeed == 0

//     }
// }

// const ferrari = new Car('ferrari','red', '250')
// // console.log(ferrari)

// // console.log(ferrari.currentSpeed)

// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// ferrari.stop()
// console.log(ferrari.currentSpeed)
// // ferrari.brake()

// // console.log(ferrari.currentSpeed)

// // ferrari.zeroToSixty()

// const porsche = new Car('porsche','yellow', '250')

// console.log(porsche.name)
// const nums = [1, 2, 3, 4, 5]
// nums.forEach(_ => porsche.drive())
// porsche.zeroToSixty()

// // you can only have methods inside classes
// const numbers = [1,2,3]
// numbers.push(4) // method
// console.log(numbers)

// Array.prototype.myPush = function(item) {
//     this[this.length] = item
//     return this
// }

// const fruits = ['banana', 'strawberry', 'cookie', 'pear', 'apple']
// fruits.myPush('kiwi')
// fruits.myPush('orange')
// fruits.myPush('udara')
// fruits.myPush('mango')

// console.log(fruits)

