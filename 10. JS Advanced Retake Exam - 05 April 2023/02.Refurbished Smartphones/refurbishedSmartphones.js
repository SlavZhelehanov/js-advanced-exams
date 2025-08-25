class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (typeof model !== 'string' || 0 === model.trim().length || !Number.isInteger(storage) || storage < 0
            || typeof price !== 'number' || price < 0 || typeof condition !== 'string' || condition.trim().length === 0) {
            throw new Error('Invalid smartphone!');
        }
        this.availableSmartphones.push({model, storage, price, condition});
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        if (!this.availableSmartphones.some(phone => phone.model === model)) throw new Error(`${model} was not found!`);
        let phone = this.availableSmartphones.find(phone => phone.model === model);

        phone.price = desiredStorage <= phone.storage ? phone.price : 128 < desiredStorage - phone.storage ? phone.price * 0.8 : phone.price * 0.9;
        this.availableSmartphones = this.availableSmartphones.filter(p => p.model !== model);
        this.soldSmartphones.push({model, storage: phone.storage, soldPrice: phone.price});
        this.revenue += phone.price;
        return `${model} was sold for ${phone.price.toFixed(2)}$`;
    }
}

// Input 1
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// Input 2
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

