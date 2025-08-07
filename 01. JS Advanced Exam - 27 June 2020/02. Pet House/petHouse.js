function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.includes(comment)) throw Error("This comment is already added!");
            this.comments.push(comment);
            return "Comment is added.";
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            let str = `Here is ${this.owner}'s pet ${this.name}.`;
            if (0 < this.comments.length) str += `\nSpecial requirements: ${this.comments.join(", ")}`;
            return str;
        }
    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return super.feed() + ", happy and purring.";
        }

        toString() {
            let str = super.toString() + `\nMain information:\n${this.name} is a cat with ${this.insideHabits}`;
            if (this.scratching) str += ", but beware of scratches.";
            return str;
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return super.feed() + ", happy and wagging tail.";
        }

        toString() {
            return super.toString() + `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
        }
    }

    return {
        Pet,
        Cat,
        Dog
    }
}