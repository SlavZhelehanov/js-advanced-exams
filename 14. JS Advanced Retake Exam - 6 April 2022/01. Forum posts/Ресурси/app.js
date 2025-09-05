window.addEventListener("load", solve);

function solve() {
    const postTitle = document.getElementById("post-title");
    const postCategory = document.getElementById("post-category");
    const postContent = document.getElementById("post-content");
    const publishBtn = document.getElementById("publish-btn");
    const reviewList = document.getElementById("review-list");

    publishBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (postTitle.value !== "" && postCategory.value !== "" && postContent.value !== "") {
            reviewList.innerHTML += `<li class="rpost">
<article>
<h4>${postTitle.value}</h4>
<p>Category: ${postCategory.value}</p>
<p>Content: ${postContent.value}</p>
</article>
<button class="action-btn edit">Edit</button>
<button class="action-btn approve">Approve</button>
</li>`;
            [postTitle.value, postCategory.value, postContent.value] = ['', '', '', ''];
        }
    });
}
