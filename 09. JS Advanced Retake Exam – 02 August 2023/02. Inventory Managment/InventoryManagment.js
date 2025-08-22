class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        if (this.capacity === this.items.length) throw new Error("The inventory is already full.");
        if (this.items.some((item) => item.itemName === itemName)) this.items.find(item => item.itemName === itemName).quantity += quantity;
        else this.items.push({[itemName]: quantity});
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }
}

// Input 1
// const manager = new InventoryManager(2);
//
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));