class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) throw new Error('Not enough space in the garden.');
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find((p) => p.plantName === plantName);

        if (!plant) throw new Error(`There is no ${plantName} in the garden.`);
        if (plant.ripe) throw new Error(`The ${plantName} is already ripe.`);
        if(quantity <= 0) throw new Error(`The quantity cannot be zero or negative.`);
        plant.quantity += quantity;
        plant.ripe = true;
        return `${quantity} ${quantity === 1 ? plantName : plantName + 's'} has successfully ripened.`;
    }
}

// Input 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// Input 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));
