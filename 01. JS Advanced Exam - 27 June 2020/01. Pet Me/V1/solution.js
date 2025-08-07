function solve() {
    const container = document.getElementById('container');
    const [name, age, kind, owner] = container.querySelectorAll('input');
    const addBtn = container.querySelector('button');
    const adoptionList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');

    addBtn.addEventListener('click', e => {
        e.preventDefault();

        if (name.value !== '' && age.value !== '' && !isNaN(+age.value) && kind.value !== '' && owner.value !== '') {
            adoptionList.innerHTML += `<li>
                <p><strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong></p>
                <span>Owner: ${owner.value}</span>
                <button>Contact with owner</button>
           </li>`;

            name.value = '';
            age.value = '';
            kind.value = '';
            owner.value = '';
        }
    });

    adoptionList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Contact with owner') {
            const li = e.target.parentNode;

            li.querySelector('button').remove();
            li.innerHTML += `<div>
                <input placeholder="Enter your names">
                <button>Yes! I take it!</button>
            </div>`;
        } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Yes! I take it!') {
            const li = e.target.parentNode.parentNode;
            const input = li.querySelector('input');

            if (input.value !== '') {
                li.querySelector('div').remove();
                li.querySelector('span').textContent = `New Owner: ${input.value}`;
                li.innerHTML += `<button>Checked</button>`;
                adoptedList.appendChild(li);
            }
        }
    });

    adoptedList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Checked') e.target.parentNode.remove();
    });
}