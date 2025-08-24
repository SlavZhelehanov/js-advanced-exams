window.addEventListener("load", solve);

function solve() {
    const gemName = document.getElementById("gem-name");
    const color  = document.getElementById("color");
    const carats = document.getElementById("carats");
    const price = document.getElementById("price");
    const type = document.getElementById("type");
    const addBtn = document.getElementById("add-btn");
    const previewList = document.getElementById("preview-list");
    const collection = document.getElementById("collection");

    let inputs = [];

    addBtn.addEventListener("click", e => {
        e.preventDefault();

        if (gemName.value.trim() !== "" &&  color.value.trim() !== '' &&  carats.value.trim() !== "" && price.value.trim() !== "" && type.value.trim()) {
            previewList.innerHTML = `<li class="gem-info">
<article>
<h4>${gemName.value.trim()}</h4>
<p>Color: ${color.value.trim()}</p>
<p>Carats: ${carats.value.trim()}</p>
<p>Price: ${price.value.trim()}$</p>
<p>Type: ${type.value.trim()}</p>
</article>
<button class="save-btn">Save to Collection</button>
<button class="edit-btn">Edit Information</button>
<button class="cancel-btn">Cancel</button>
</li>`;
            inputs.push(gemName.value.trim());
            gemName.value = "";
            inputs.push(color.value.trim());
            color.value = "";
            inputs.push(carats.value.trim());
            carats.value = "";
            inputs.push(price.value.trim());
            price.value = "";
            inputs.push(type.value.trim());
            type.value = "";
            addBtn.disabled = true;
        }
    });

    previewList.addEventListener("click", e => {
        if (e.target.classList.contains("edit-btn")) {
            e.target.parentNode.remove();
            gemName.value = inputs.shift();
            color.value = inputs.shift();
            carats.value = inputs.shift();
            price.value = inputs.shift();
            type.value = inputs.shift();
            addBtn.disabled = false;
        } else if (e.target.classList.contains("save-btn")) {
            e.target.parentNode.remove();
            collection.innerHTML += `<li><p class="collection-item">${inputs.shift()} - Color: ${inputs.shift()}/ Carats: ${inputs.shift()}/ Price: ${inputs.shift()}$/ Type: ${inputs.shift()}</p></li>`;
            addBtn.disabled = false;
        } else if (e.target.classList.contains("cancel-btn")) {
            e.target.parentNode.remove();
            inputs = [];
            addBtn.disabled = false;
        }
    });
}
