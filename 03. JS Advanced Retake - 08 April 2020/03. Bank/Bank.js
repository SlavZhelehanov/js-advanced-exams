class Bank {
    constructor(bankName) {
        this._bankName = bankName; // private-ish by convention
        this.allCustomers = [];
    }

    newCustomer(customer) {
        // Check if already exists
        if (this.allCustomers.some(c => c.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        // Add and return
        this.allCustomers.push({
            ...customer,
            totalMoney: 0,
            transactions: []
        });
        return {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId
        };
    }

    depositMoney(personalId, amount) {
        const customer = this._findCustomer(personalId);

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this._findCustomer(personalId);

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this._findCustomer(personalId);

        let result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${customer.personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            `Transactions:`
        ];

        // Transactions in descending order
        for (let i = customer.transactions.length; i > 0; i--) {
            result.push(`${i}. ${customer.transactions[i - 1]}`);
        }

        return result.join('\n');
    }

    _findCustomer(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);
        if (!customer) {
            throw new Error(`We have no customer with this ID!`);
        }
        return customer;
    }
}