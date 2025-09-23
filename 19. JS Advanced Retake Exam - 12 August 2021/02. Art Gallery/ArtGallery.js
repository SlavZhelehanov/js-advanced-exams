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

        this.guests.push({
            guestName,
            points: table.hasOwnProperty(personality) ? table[personality] : 50,
            purchaseArticle: 0
        });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();

        let article = this.listOfArticles.find(
            a => a.articleName === articleName && a.articleModel === articleModel
        );

        if (!article) {
            throw new Error("This article is not found.");
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(g => g.guestName === guestName);

        if (!guest) {
            return "This guest is not invited.";
        }

        let articlePoints = this.possibleArticles[articleModel];

        if (guest.points < articlePoints) {
            return "You need to more points to purchase the article.";
        }

        guest.points -= articlePoints;
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        let output = [];

        if (criteria === "article") {
            output.push("Articles information:");
            this.listOfArticles.forEach(({
                                             articleModel,
                                             articleName,
                                             quantity
                                         }) => output.push(`${articleModel} - ${articleName} - ${quantity}`));
        } else if (criteria === "guest") {
            output.push("Guests information:");
            this.guests.forEach(({guestName, purchaseArticle}) => output.push(`${guestName} - ${purchaseArticle}`));
        }
        return output.join("\n");
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

// Input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// Input 4
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
