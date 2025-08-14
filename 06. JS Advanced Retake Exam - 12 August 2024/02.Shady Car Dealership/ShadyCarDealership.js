class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model === '' || year <= 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        } else {
            this.availableCars.push({ model, year, mileage, price });
            return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
        }
    }
}

// Input 1
// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));