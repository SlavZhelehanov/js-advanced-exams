function solve() {
    const [fname, lname, email, birth, position, salary] = document.getElementsByTagName('input');
    const addWorker = document.getElementById('add-worker');
    const tbody = document.getElementById('tbody');
    const sum = document.getElementById('sum');

    addWorker.addEventListener('click', e => {
        e.preventDefault();

        if (fname.value !== '' && lname.value !== '' && email.value !== '' && birth.value !== '' && position.value !== '' && salary.value !== '') {
            tbody.innerHTML += `<tr>
<td>${fname.value}</td>
<td>${lname.value}</td>
<td>${email.value}</td>
<td>${birth.value}</td>
<td>${position.value}</td>
<td>${salary.value}</td>
<td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
</tr>`;

            sum.textContent = (+sum.textContent + +salary.value).toFixed(2);
            [fname.value, lname.value, email.value, birth.value, position.value, salary.value] = ['', '', '', '', '', ''];
        }
    });

    tbody.addEventListener('click', e => {
        if (e.target.classList.contains('edit')) {
            const tr = e.target.parentElement.parentElement;
            const tds = tr.getElementsByTagName('td');

            [fname.value, lname.value, email.value, birth.value, position.value, salary.value] = [tds[0].textContent, tds[1].textContent, tds[2].textContent, tds[3].textContent, tds[4].textContent, tds[5].textContent];
            sum.textContent = (+sum.textContent - +salary.value).toFixed(2);
            tr.remove();
        } else if (e.target.classList.contains('fired')) {
            const tr = e.target.parentElement.parentElement;
            const tds = tr.getElementsByTagName('td');

            sum.textContent = (+sum.textContent - +tds[5].textContent).toFixed(2);
            tr.remove();
        }
    });
}
solve()