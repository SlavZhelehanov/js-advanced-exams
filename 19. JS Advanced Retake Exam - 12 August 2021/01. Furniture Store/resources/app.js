window.addEventListener('load', solve);

function solve() {
    const [model, year, price] = document.getElementsByTagName('input');
    const description = document.getElementById('description');
    const add = document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');

    add.addEventListener('click', (e) => {
        e.preventDefault();

        if(model.value !== '' && description.value !== '' && year.value !== '' && 0 <= +year.value && price.value !== '' && 0<= +price.value){
            furnitureList.innerHTML += `<tr class="info">
<td>${model.value}</td>
<td>${Number(price.value).toFixed(2)}</td>
<td>
<button class="moreBtn">More Info</button>
<button class="buyBtn">Buy it</button>
</td>
</tr>
<tr class="hide">
<td>Year: ${year.value}</td>
<td colspan="3">Description: ${description.value}</td>
</tr>`;
            [model.value, year.value, price.value, description.value] = ['', '', '', ''];
        }
    });
}
