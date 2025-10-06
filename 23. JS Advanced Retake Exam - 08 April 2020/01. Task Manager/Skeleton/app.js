function solve() {
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const addBtn = document.getElementById("add");
    const [_, orange, yellow, green] = document.getElementsByTagName("section");
    const open = orange.getElementsByTagName("div")[1];

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
}