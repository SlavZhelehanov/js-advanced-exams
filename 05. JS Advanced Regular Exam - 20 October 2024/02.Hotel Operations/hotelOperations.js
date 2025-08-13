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

    showAvailableRooms() {
        if (0 === Object.keys(this.roomAvailability).length) return "Our rooms are not ready yet, please come back later...";

        let output = [];

        for (const [roomType, {neededSupplies, pricePerNight}] of Object.entries(this.roomAvailability)) {
            output.push(`${roomType} - $ ${pricePerNight}`);
        }
        return output.join("\n");
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) return `There is no ${roomType} available, would you like to book another room?`;

        const roomData = this.roomAvailability[roomType];
        const neededSupplies = roomData.neededSupplies;

        for (let supply of neededSupplies) {
            let [supplyName, supplyQtyStr] = supply.split(" ");
            let supplyQty = parseInt(supplyQtyStr, 10);

            if (!this.supplyStock.hasOwnProperty(supplyName) || this.supplyStock[supplyName] < supplyQty) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        // If everything is available
        return `Your booking for ${roomType} has been confirmed! The price is $${roomData.pricePerNight} per night.`;
    }
}

//Input 1
// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

//Input 2
// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
//
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

//Input 3
// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
//
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

// Input 4
// let hotel = new Hotel(500);
//
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
//
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());
// console.log(hotel.bookRoom("Apartment"));
// console.log(hotel.bookRoom("Deluxe Suite"));