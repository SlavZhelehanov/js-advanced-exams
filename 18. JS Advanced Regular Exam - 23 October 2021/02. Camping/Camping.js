class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) throw new Error("Unsuccessful registration at the camp.");
        if (this.listOfParticipants.some(participant => participant.name === name)) return `The ${name} is already registered at the camp.`;
        if (money < this.priceForTheCamp[condition]) return "The money is not enough to pay the stay at the camp.";
        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        if (!this.listOfParticipants.some(participant => participant.name === name)) throw new Error(`The ${name} is not registered in the camp.`);
        this.listOfParticipants = this.listOfParticipants.filter(participant => participant.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(participant => participant.name === participant1);
        let p2 = participant2 ? this.listOfParticipants.find(participant => participant.name === participant2) : null;

        if (!p1 || (participant2 && !p2)) throw new Error("Invalid entered name/s.");
        if (p2 && p1.condition !== p2.condition) throw new Error("Choose players with equal condition.");
        if (typeOfGame === "Battleship" && !p2) {
            p1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === "WaterBalloonFights" && p2 && p2.power < p1.power) {
            p1.wins++;
            return `The ${participant1} is winner in the game ${typeOfGame}.`;
        } else if (typeOfGame === "WaterBalloonFights" && p2 && p1.power < p2.power) {
            p2.wins++;
            return `The ${participant2} is winner in the game ${typeOfGame}.`;
        } else if (typeOfGame === "WaterBalloonFights" && p2 && p1.power === p2.power) {
            return "There is no winner.";
        }
    }
}

// Input 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// Input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// Input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
