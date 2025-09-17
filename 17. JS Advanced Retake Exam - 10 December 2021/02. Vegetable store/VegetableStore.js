class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables) {
        let output = [];

        for (const data of vegetables) {
            const [type, quantity, price] = data.split(' ');
            const vegetable = this.availableProducts.find((product) => product.type === type);

            if (!vegetable) this.availableProducts.push({type, quantity: +quantity, price: +price});
            else {
                vegetable.quantity += +quantity;

                if (+price < vegetable.price) vegetable.price = +price;
            }
            if (!output.includes(type)) output.push(type);
        }

        return `Successfully added ${output.join(', ')}`;
    }
}

// Input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
