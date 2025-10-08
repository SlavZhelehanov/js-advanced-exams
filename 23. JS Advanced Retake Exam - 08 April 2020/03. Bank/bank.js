class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(c => c.personalId === customer.personalId)) throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(customer => customer.personalId === personalId);

        if (!customer) throw new Error("We have no customer with this ID!");
        if (!customer.hasOwnProperty("totalMoney")) customer["totalMoney"] = amount;
        else customer["totalMoney"] += amount;
        return `${customer.totalMoney}$`;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

console.log(bank.depositMoney(6233267, 123456));
console.log(bank.depositMoney(6233267, 123456));
// console.log(bank.depositMoney(6233266, 123456)); // Throw error
