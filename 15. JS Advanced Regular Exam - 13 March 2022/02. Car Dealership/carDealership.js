class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) throw new Error("Invalid input!");
        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredMileage) {
        let car = this.availableCars.find(car => car.model === model);

        if (!car) throw new Error(`${model} was not found!`);
        if (desiredMileage < car.mileage && car.mileage - desiredMileage <= 40000) car.price *= 0.95;
        else if (desiredMileage < car.mileage && 40000 < car.mileage - desiredMileage) car.price *= 0.9;

        this.soldCars.push({model, horsepower: car.horsepower, soldPrice: car.price});
        this.totalIncome += car.price;
        this.availableCars = this.availableCars.filter(car => car.model !== model);
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }
}

// Input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// Input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
