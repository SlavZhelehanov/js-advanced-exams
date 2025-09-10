class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || typeof model !== "string" || horsepower < 0 || !Number.isInteger(horsepower)
            || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price: Number(price),
            mileage: Number(mileage)
        };

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let carIndex = this.availableCars.findIndex(c => c.model === model);

        if (carIndex === -1) {
            throw new Error(`${model} was not found!`);
        }

        let car = this.availableCars[carIndex];
        let soldPrice = car.price;

        if (car.mileage > desiredMileage) {
            let diff = car.mileage - desiredMileage;
            if (diff <= 40000) {
                soldPrice *= 0.95;
            } else {
                soldPrice *= 0.90;
            }
        }

        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: soldPrice
        });

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }

        let result = ["-Available cars:"];
        this.availableCars.forEach(c => {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        });

        return result.join("\n");
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }

        let sortedCars;
        if (criteria === "horsepower") {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === "model") {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        result.push(`-${this.soldCars.length} cars sold:`);

        sortedCars.forEach(c => {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        });

        return result.join("\n");
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

// Input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// Input 4
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));