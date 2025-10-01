function solve() {
    const creator = document.getElementById('creator');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const content = document.getElementById('content');
    const createBtn = document.getElementsByTagName('form')[0].getElementsByTagName('button')[0];
    const posts = document.getElementsByTagName('main')[0].getElementsByTagName('section')[0];
    const archiveSection = document.getElementsByClassName('archive-section')[0].getElementsByTagName('ol')[0]

    let titles = [];

    createBtn.addEventListener('click', e => {
        e.preventDefault();

        posts.innerHTML += `<article>
        <h1>${title.value}</h1>
        <p>Category:<strong>${category.value}</strong></p>
        <p>Creator:<strong>${creator.value}</strong></p>
        <p>${content.value}</p>
        <div class="buttons">
            <button class="btn delete">Delete</button>
            <button class="btn archive">Archive</button>
        </div>
        </article>`;
    });

    posts.addEventListener('click', e => {
        if (e.target.classList.contains('archive')) {
            const article = e.target.parentNode.parentNode;
            const h1Title = article.getElementsByTagName('h1')[0].textContent;

            titles.push(h1Title);
            archiveSection.innerHTML = '';
            titles.sort((a, b) => a.localeCompare(b)).forEach(t => {archiveSection.innerHTML += `<li>${t}</li>`;});
            article.remove();
        } else if (e.target.classList.contains('delete')) e.target.parentNode.parentNode.remove();
    });
}
