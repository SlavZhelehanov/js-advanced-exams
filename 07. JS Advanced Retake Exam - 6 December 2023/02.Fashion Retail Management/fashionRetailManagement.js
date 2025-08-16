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

    findProductsBySize(size) {
        if (!this.productStock.some(stock => stock.size === size)) {
            return "There are no products available in that size";
        } else {
            return this.productStock.filter(stock => stock.size === size).map(stock => `${stock.productName}-${stock.quantity} pieces`).join(", ");
        }
    }

    listProducts () {
        if (0 === this.productStock.length) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            return `${this.storehouse} storehouse in ${this.location} available products:\n${this.productStock.sort((a, b) => a.productName.localeCompare(b.productName)).map(stock => `${stock.productName}/Size:${stock.size}/Quantity:${stock.quantity}/Price:${stock.price}$`).join("\n")}`;
        }
    }
}

// Input 1
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// Input 2
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// Input 3
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

// Input 4
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());