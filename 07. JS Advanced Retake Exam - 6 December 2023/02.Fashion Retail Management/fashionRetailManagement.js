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