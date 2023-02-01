class Car {
    constructor(name, color, speed) {
        // properties
        this.name = name
        this.color = color
        this.speed = speed
    }

    drive() {
        console.log('two miles')
    }

    brake() {
        console.log('brakes in')
    }
}

const ferrari = new Car('ferrari','red', '250')
console.log(ferrari)

ferrari.drive()
ferrari.brake()