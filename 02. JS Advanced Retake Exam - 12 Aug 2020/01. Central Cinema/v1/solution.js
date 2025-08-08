function solve() {
    const container = document.querySelector('#container');
    const [name, hall, price] = container.querySelectorAll('input');
    const onScreenBtn = container.querySelector('button');
    const movies = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const archive = document.querySelector('#archive');

    onScreenBtn.addEventListener('click', e => {
        e.preventDefault();

        if (name.value !== '' && hall.value !== '' && price.value !== '' && !isNaN(+price.value)) {
            movies.innerHTML += `<li>
                <span>${name.value}</span><strong>Hall: ${hall.value}</strong>
                <div>
                    <strong>${price.value}</strong><input placeholder="Tickets Sold">
                    <button>Archive</button>
                </div>
            `;

            name.value = '';
            hall.value = '';
            price.value = '';
        }
    });

    movies.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Archive') {
            const li = e.target.parentElement.parentElement;

            if (li.querySelector('input').value !== '' && !isNaN(+li.querySelector('input').value)) {
                const newPrice = li.querySelector('div>strong');
                const totalPrice = +newPrice.textContent * +li.querySelector('input').value;

                li.querySelector('div').remove();
                li.querySelector('strong').textContent = `Total amount: ${totalPrice.toFixed(2)}`;
                li.innerHTML += `<button>Delete</button>`;
                archiveUl.appendChild(li);
            }
        }
    });

    archiveUl.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') e.target.parentElement.remove();
    });

    archive.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Clear') archiveUl.innerHTML = '';
    });
}