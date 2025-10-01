class Story {
    #comments = [];
    #likes = [];
    #ID = 1;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.length === 0) return `${this.title} has 0 likes`;
        if (this.#likes.length === 1) return `${this.#likes[0]} likes this story!`;
        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this.#likes.includes(username)) throw new Error("You can't like the same story twice!");
        if (this.creator === username) throw new Error("You can't like your own story!");
        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this.#likes.includes(username)) throw new Error("You can't dislike this story!");
        this.#likes = this.#likes.filter(user => user !== username);
        return `${username} disliked ${this.title}`;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
