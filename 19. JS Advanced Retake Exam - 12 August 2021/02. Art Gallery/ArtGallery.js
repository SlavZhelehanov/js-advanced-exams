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
}

// Input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
