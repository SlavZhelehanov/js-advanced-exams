class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let result = [];

        supplies.forEach(item => {
            const [supplyName, supplyQuantity, supplyTotalPrice] = item.split(' ');

            if (0 <= this.initialBudget - +supplyTotalPrice && !this.supplyStock[supplyName]) {
                this.supplyStock[supplyName] = +supplyQuantity;
                this.initialBudget -= +supplyTotalPrice;
                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else if (0 <= this.initialBudget - +supplyTotalPrice && this.supplyStock[supplyName]) {
                this.supplyStock[supplyName] += +supplyQuantity;
                this.initialBudget -= +supplyTotalPrice;
                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else result.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
        });
        return result.join('\n');
    }
}