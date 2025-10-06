function solve() {
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const addBtn = document.getElementById("add");
    const [_, orange, yellow, green] = document.getElementsByTagName("section");
    const open = orange.getElementsByTagName("div")[1];
    const inProgress = yellow.getElementsByTagName("div")[1];
    const complete = green.getElementsByTagName("div")[1];

    addBtn.addEventListener("click", function(e) {
        e.preventDefault();

        if (task.value !== "" && description.value !== "" && date.value !== "") {
            open.innerHTML += `<article>
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

    open.addEventListener("click", function(e) {
        if (e.target.classList.contains("green")) {
            const article = e.target.parentElement.parentElement;
            const [green, red] = article.getElementsByTagName("button");

            red.className = "orange";
            red.textContent = "Finish";
            green.className = "red";
            green.textContent = "Delete";
            inProgress.appendChild(article);
        } else if (e.target.classList.contains("red")) e.target.parentElement.parentElement.remove();
    });

    inProgress.addEventListener("click", function(e) {
        if (e.target.classList.contains("red")) {
            e.target.parentElement.parentElement.remove();
        } else if (e.target.classList.contains("orange")) {
            const article = e.target.parentElement.parentElement;

            article.getElementsByTagName("div")[0].remove();
            complete.appendChild(article);
        }
    });
}