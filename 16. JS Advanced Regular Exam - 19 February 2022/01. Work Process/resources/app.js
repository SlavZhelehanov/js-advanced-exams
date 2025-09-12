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
}
solve()