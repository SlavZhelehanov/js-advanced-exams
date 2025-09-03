class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) return `${participantName} has already been added to the list`;
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) throw new Error(`${participantName} is not in the current participants list`);
        if (condition < 30) throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        if (condition / 30 < 3) return `${participantName} could only complete ${Math.floor(condition / 30)} of the disciplines`;
        this.listOfFinalists.push({participantName, participantGender: this.participants[participantName]});
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding (participantName) {
        if (!this.listOfFinalists.some(p => p.participantName === participantName)) return `${participantName} is not in the current finalists list`;
        return `${participantName} was rewarded with a trophy for his performance`;
    }
}

// Input 1
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// Input 2
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// Input 3
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
