window.addEventListener("load", solve);

function solve() {
    const [firstName, lastName, age,storyTitle, formBtn] = document.getElementsByTagName("input");
    const genre = document.getElementsByTagName("select")[0];
    const story = document.getElementsByTagName("textarea")[0];
    const previewList = document.getElementsByTagName("ul")[0];

    let inputs = [];

    formBtn.addEventListener("click", e => {
        e.preventDefault();

        if (firstName.value.trim() !== "" && lastName.value.trim() !== "" && age.value.trim() !== "" && storyTitle.value.trim() !== "" && genre.value.trim() !== "" && story.value.trim() !== "") {
            previewList.innerHTML += `<li class="story-info">
            <article>
            <h4>Name: ${firstName.value.trim()} ${lastName.value.trim()}</h4>
            <p>Age: ${age.value.trim()}</p>
            <p>Title: ${storyTitle.value.trim()}</p>
            <p>Genre: ${genre.value.trim()}</p>
            <p>${story.value.trim()}</p>
</article>
<button class="save-btn">Save Story</button>
<button class="edit-btn">Edit Story</button>
<button class="delete-btn">Delete Story</button>
            </li>`;
            inputs.push(firstName.value.trim(), lastName.value.trim(), age.value.trim(), storyTitle.value.trim(), genre.value.trim(), story.value.trim());
            [firstName.value, lastName.value, age.value, storyTitle.value, genre.value, story.value] = ['', '', '', '', '', ''];
            formBtn.disabled = true;
        }
    });

    previewList.addEventListener("click", e => {
        if (e.target.classList.contains("edit-btn")) {
            e.target.parentNode.remove();
            [firstName.value, lastName.value, age.value, storyTitle.value, genre.value, story.value] = [...inputs];
            inputs = [];
            formBtn.disabled = false;
        } else if (e.target.classList.contains("save-btn")) {
            document.getElementById("main").innerHTML = '<h1>"Your scary story is saved!"</h1>';
        }
    });
}
