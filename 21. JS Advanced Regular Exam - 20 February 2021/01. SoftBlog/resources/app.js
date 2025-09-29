function solve() {
    const creator = document.getElementById('creator');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const content = document.getElementById('content');
    const createBtn = document.getElementsByTagName('form')[0].getElementsByTagName('button')[0];
    const siteSectionContent = document.getElementsByClassName('site-content')[0].getElementsByTagName('section')[0];

    createBtn.addEventListener('click', e => {
        e.preventDefault();

        siteSectionContent.innerHTML += `<article>
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
}
