class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let result = [];

        footballPlayers.forEach(info => {
            const [name, age, playerValue] = info.split('/');
            const player = this.invitedPlayers.find(player => player.name === name);

            if (!result.includes(name)) result.push(name);
            if (!player) {
                this.invitedPlayers.push({name, age: +age, playerValue: +playerValue});
            } else if (player.playerValue < +playerValue) {
                player.playerValue = +playerValue;
            }
        });
        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const player = this.invitedPlayers.find(player => player.name === name);

        if (!player) throw new Error(`${name} is not invited to the selection list!`);
        if (+playerOffer < player.playerValue) throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - +playerOffer} million more are needed to sign the contract!`);
        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(player => player.name === name);

        if (!player) throw new Error(`${name} is not invited to the selection list!`);
        if (player.age < age && age - player.age < 5) return `${name} will sign a contract for ${age - player.age} years with ${this.clubName} in ${this.country}!`;
        if (player.age < age && 5 < age - player.age) return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        if (age <= player.age) return `${name} is above age limit!`;
    }
}

// Input 1
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// Input 2
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// Input 3
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

