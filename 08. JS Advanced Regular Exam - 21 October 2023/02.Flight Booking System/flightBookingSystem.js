class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.some(flight => flight.flightNumber === flightNumber)) return `Flight ${flightNumber} to ${destination} is already available.`;
        this.flights.push({flightNumber, destination, departureTime, price});
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight (passengerName, flightNumber) {
        if (!this.flights.some(flight => flight.flightNumber === flightNumber)) return `Flight ${flightNumber} is not available for booking.`;
        this.bookings.push({passengerName, flightNumber});
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking (passengerName, flightNumber) {
        if (!this.bookings.some(passenger => passenger.flightNumber === flightNumber && passenger.passengerName === passengerName)) throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        this.bookings = this.bookings.filter(booking => booking.flightNumber !== flightNumber && booking.passengerName !== passengerName);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings (criteria) {
        if (0 === this.bookings.length) throw new Error(`No bookings have been made yet.`);
        switch (criteria) {
            case 'all': {
                let message = `All bookings(${this.bookingsCount}):`;

                for (const {passengerName, flightNumber} of this.bookings) message += `\n${passengerName} booked for flight ${flightNumber}.`;
                return message;
            }
            case 'cheap': {
                if (0 === this.flights.filter(f => f.price <= 100).length) return "No cheap bookings found.";
                let message = "Cheap bookings:", cheap = this.flights.filter(f => f.price <= 100);

                for (const {flightNumber, destination, departureTime, price} of cheap) {
                    message += `\n${this.bookings.find(p => p.flightNumber === flightNumber).passengerName} booked for flight ${flightNumber}.`
                }
                return message;
            }
            case 'expensive': {
                if (0 === this.flights.filter(f => 100 < f.price).length) return "No expensive bookings found.";
                let message = "Expensive bookings:", expensive = this.flights.filter(f => 100 < f.price);

                for (const {flightNumber, destination, departureTime, price} of expensive) {
                    message += `\n${this.bookings.find(p => p.flightNumber === flightNumber).passengerName} booked for flight ${flightNumber}.`
                }
                return message;
            }
            default: {throw new Error("Invalid criteria.");}
        }
    }
}

// Input 1
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// Input 2
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// Input 3
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// Input 4
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// Input 5
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap"));