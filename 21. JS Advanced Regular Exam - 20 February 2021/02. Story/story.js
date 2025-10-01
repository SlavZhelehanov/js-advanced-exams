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

    comment(username, content, id) {
        let comment = this.#comments.find(c => c.Id === id);

        if (!id || !comment) {
            this.#comments.push({ Id: this.#ID, Username: username, Content: content, Replies: [] });
            this.#ID++;
            return `${username} commented on ${this.title}`;
        }

        const rID = Number(id + '.' + (comment.Replies.length + 1));

        comment.Replies.push({ Id: rID, Username: username, Content: content });
        return "You replied successfully";
    }

    toString(sortingType) {
        let output = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.#likes.length}`, "Comments:"];

        if (this.#comments.length === 0) return output.join("\n");
        else if (sortingType === 'asc') this.#comments.sort((a, b) => a.Id - b.Id).forEach(({ Replies }) => Replies.sort((a, b) => a.Id - b.Id));
        else if (sortingType === 'desc') this.#comments.sort((a, b) => b.Id - a.Id).forEach(({ Replies }) => Replies.sort((a, b) => b.Id - a.Id));
        else if (sortingType === 'username') this.#comments.sort((a, b) => a.Username.localeCompare(b.Username)).forEach(({ Replies }) => Replies.sort((a, b) => a.Username.localeCompare(b.Username)));

        this.#comments.forEach(({ Id, Username, Content, Replies }) => {
            let comment = [`-- ${Id}. ${Username}: ${Content}`];

            Replies.forEach(r => comment.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
            Replies.length === 0 ? output.push(comment[0]) : output.push(comment.join("\n"));
        });
        return output.join("\n");
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));