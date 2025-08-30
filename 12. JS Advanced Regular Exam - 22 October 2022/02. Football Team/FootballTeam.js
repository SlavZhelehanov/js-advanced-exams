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
                this.invitedPlayers.push({ name, age: +age, playerValue: +playerValue });
            } else if (player.playerValue < playerValue) {
                player.playerValue = playerValue;
            }
        });
        return `You successfully invite ${result.join(', ')}.`;
    }
}

// Input 1
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

