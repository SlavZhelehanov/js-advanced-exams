class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) throw new Error("This article model is not included in this gallery!");

        let article = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel.toLowerCase());

        if (article) article.quantity += quantity;
        else this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity});
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g.guestName === guestName)) throw new Error(`${guestName} has already been invited.`);

        const table = {"Vip": 500, "Middle": 250};

        this.guests.push({guestName, points: table.hasOwnProperty(personality) ? table[personality] : 50, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }
}

// Input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
