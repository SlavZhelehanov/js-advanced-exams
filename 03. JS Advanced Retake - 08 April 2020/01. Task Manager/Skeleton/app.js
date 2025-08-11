function solve() {
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const add = document.getElementById("add");

    const [_, orange, yellow, green] = document.querySelectorAll("section");

    add.addEventListener("click", e => {
        e.preventDefault();

        if (task.value !== '' && description.value !== '' && date.value !== '') {
            orange.querySelectorAll("div")[1].innerHTML += `<article>
<h3>${task.value}</h3>
<p>Description: ${description.value}</p>
<p>Due Date: ${date.value}</p>
<div class="flex">
<button class="green">Start</button>
<button class="red">Delete</button>
</div>
</article>`;
        }
    });

    orange.querySelectorAll("div")[1].addEventListener("click", e => {
        if (e.target.classList.contains("green")) {
            const article = e.target.parentNode.parentNode;

            e.target.remove();
            article.querySelector('.flex').innerHTML += `<button class="orange">Finish</button>`;
            yellow.querySelectorAll('div')[1].appendChild(article);
        }
    });
}