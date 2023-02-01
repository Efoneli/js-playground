class Car {
    constructor(name, color, topSpeed, currentSpeed) {
        // properties
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }

    zeroToSixty () {
        setTimeout(() => {
            console.log('phew!!, that was fast')
            this.currentSpeed = 50
        })
    }

    drive() {
        // console.log('two miles')
        this.currentSpeed += 10
        console.log(`driving speed at ${this.currentSpeed}`)
    }

    brake() {
        // console.log('brakes in')
    }
}

const ferrari = new Car('ferrari','red', '250')
// console.log(ferrari)

console.log(ferrari.currentSpeed)

ferrari.drive()
ferrari.brake()

console.log(ferrari.currentSpeed)

ferrari.zeroToSixty()