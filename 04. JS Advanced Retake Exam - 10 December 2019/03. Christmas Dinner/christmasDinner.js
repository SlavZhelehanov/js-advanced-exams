class ChristmasDinner {
    constructor(budget) {
        this.budget = 0;
        if (0 <= budget) this.budget = budget;
        else throw Error("The budget cannot be a negative number");
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([type, price]) {
        if (this.budget < price) throw Error("Not enough money to buy this product");
        this.budget -= price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
    }

    recipes({ recipeName, productsList }) {
        let err = false;

        productsList.forEach(element => {
            if (!this.products.includes(element)) {
                err = true;
                return;
            }
        });

        if (err) throw Error("We do not have this product");
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let err = true;

        this.dishes.forEach( ({recipeName, productsList}) => {
            if (recipeName === dish) {
                err = false;
                return;
            }
        });

        if (err) throw new Error(`We do not have this dish`);
        if (this.guests[name]) throw new Error("This guest has already been invited");
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = [];

        for (const key in this.guests) {
            this.dishes.forEach(element => {
                if(element.recipeName === this.guests[key]) {
                    output.push(`${key} will eat ${element.recipeName}, which consists of ${element.productsList.join(', ')}`);
                    return;
                }
            });
        }

        return output.join('\n');
    }
}