class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let output = [];

        for (const data of vegetables) {
            const [type, quantity, price] = data.split(' ');
            const vegetable = this.availableProducts.find((product) => product.type === type);

            if (!vegetable) this.availableProducts.push({type, quantity: +quantity, price: +price});
            else {
                vegetable.quantity += +quantity;

                if (vegetable.price < +price) vegetable.price = +price;
            }
            if (!output.includes(type)) output.push(type);
        }

        return `Successfully added ${output.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const data of selectedProducts) {
            const [type, quantity] = data.split(' ');
            const vegetable = this.availableProducts.find((product) => product.type === type);

            if (!vegetable) throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            if (vegetable.quantity < +quantity) throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            totalPrice += vegetable.price * quantity;
            vegetable.quantity -= +quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const vegetable = this.availableProducts.find((product) => product.type === type);

        if (!vegetable) throw new Error(`${type} is not available in the store.`);

        vegetable.quantity = vegetable.quantity <= +quantity ? 0 : vegetable.quantity - +quantity;
        return vegetable.quantity === 0 ? `The entire quantity of the ${type} has been removed.` : `Some quantity of the ${type} has been removed.`;
    }

    revision () {
        let output = ["Available vegetables:"];

        [...this.availableProducts].sort((a, b) => a.price - b.price).forEach(({type, quantity, price}) => output.push(`${type}-${quantity}-$${price}`));
        return `${output.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    }
}

// Input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// Input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// Input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Input 4
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());