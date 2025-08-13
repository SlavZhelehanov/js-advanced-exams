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

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies,
            pricePerNight: pricePerNight
        };

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }
}

// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
//
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
