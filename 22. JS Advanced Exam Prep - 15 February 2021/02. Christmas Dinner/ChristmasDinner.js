class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {throw new Error("The budget cannot be a negative number")}
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product, price]) {
        if (this.budget < price) throw new Error("Not enough money to buy this product");
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }

    recipes({recipeName, productsList}){
        for (let i = 0; i < productsList.length; i++) if (!this.products.some(product => product === productsList[i])) throw new Error("We do not have this product");
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`;
    };

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
