function solveClasses(params) {
    class Hall {
        constructor(capacity, name) {
            this.capacity = +capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.includes(title)) throw Error("This event is already added!");
            this.events.push(title);
            return "Event is added.";
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            return 0 < this.events.length ? `${this.name} hall - ${this.capacity}\nEvents: ${this.events.join(', ')}` : `${this.name} hall - ${this.capacity}`;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + "Аll screenings are over.";
        }

        toString() {
            return super.toString() + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.performers = [];
        }

        hallEvent(title, performers) {
            this.performers = [...performers];
            return super.hallEvent(title);
        }

        close() {
            return super.close() + "Аll performances are over.";
        }

        toString() {
            return 0 < this.events.length ? super.toString() + `\nPerformers: ${this.performers.join(', ')}.` : super.toString();
        }
    }

    return { Hall, MovieTheater, ConcertHall };
}