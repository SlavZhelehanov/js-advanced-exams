class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        if (this.productStock.some(stock => stock.productName === productName && stock.size === size)) {
            this.productStock.find(stock => stock.productName === productName && stock.size === size).quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({productName, size, quantity, price});
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct (productName, size) {
        if (!this.productStock.some(stock => stock.productName === productName && stock.size === size)) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock = this.productStock.filter(stock => stock.productName !== productName && stock.size !== size);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    // getProducts() {
    //     return this.productStock;
    // }
}

// Input 1
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.getProducts());

// Input 2
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));
