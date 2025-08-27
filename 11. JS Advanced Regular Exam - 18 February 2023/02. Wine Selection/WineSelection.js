class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= this.wines.length) throw new Error('Not enough space in the cellar.');
        this.wines.push({wineName, wineType, price, paid: false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        if (!this.wines.some(wine => wine.wineName === wineName)) throw new Error(`${wineName} is not in the cellar.`);
        if (this.wines.find(wine => wine.wineName === wineName).paid) throw new Error(`${wineName} has already been paid.`);
        this.wines.find(wine => wine.wineName === wineName).paid = true;
        this.bill += this.wines.find(wine => wine.wineName === wineName).price;
        return `You bought a ${wineName} for a {price}$.`;
    }
}

// Input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

