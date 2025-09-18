window.addEventListener('load', solve);

function solve() {
    const [genre, name, author, date] = document.getElementsByTagName('input');
    const addBtn = document.getElementById('add-btn');
    const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    const totalLikes = document.getElementById('total-likes').getElementsByTagName('p')[0];
    const savedContainer = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (genre.value !== '' && name.value !== '' && author.value !== '' && date.value !== '') {
            allHitsContainer.innerHTML += `<div class="hits-info">
<img src="./static/img/img.png" />
<h2>Genre: ${genre.value}</h2>
<h2>Name: ${name.value}</h2>
<h2>Author: ${author.value}</h2>
<h3>Date: ${date.value}</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>
</div>`;
            [genre.value, name.value, author.value, date.value] = ["", "", "", ""];
        }
    });

    allHitsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('like-btn')) {
            e.target.disabled = true;
            totalLikes.textContent = `Total Likes: ${+totalLikes.textContent.split(": ")[1] + 1}`;
        } else if (e.target.classList.contains('save-btn')) {
            const div = e.target.parentElement;
            const [save, like, del] = div.getElementsByTagName('button');

            save.remove();
            like.remove();
            savedContainer.appendChild(div);
        } else if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    savedContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
}