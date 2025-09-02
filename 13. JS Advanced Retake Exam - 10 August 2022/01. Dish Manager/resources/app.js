window.addEventListener("load", solve);

function solve() {
    const [firstName, lastName, age, formBtn] = document.getElementsByTagName('input');
    const gender = document.getElementsByTagName('select')[0];
    const task = document.getElementsByTagName('textarea')[0];
    const progressCount = document.getElementById('progress-count');
    const [inProgress, finished] = document.getElementsByTagName('ul');

    formBtn.addEventListener('click', e => {
        e.preventDefault();

        if (firstName.value.trim() !== '' && lastName.value.trim() !== '' && age.value.trim() !== '' && gender.value.trim() !== '' && task.value.trim() !== '') {
            progressCount.textContent = +progressCount.textContent + 1;
            inProgress.innerHTML += `<li class="each-line">
<article>
<h4>${firstName.value.trim()} ${lastName.value.trim()}</h4>
<p>${gender.value.trim()}, ${age.value.trim()}</p>
<p>Dish description: ${task.value.trim()}</p>
</article>
<button class="edit-btn">Edit</button>
<button class="complete-btn">Mark as complete</button>
</li>`;
            firstName.value = '';
            lastName.value = '';
            age.value = '';
            gender.value = '';
            task.value = '';
        }
    });

    inProgress.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            const li = e.target.parentNode;
            const [genderAge, description] = li.querySelectorAll('p');

            progressCount.textContent = +progressCount.textContent - 1;
            [firstName.value, lastName.value] = li.querySelector('h4').textContent.split(' ');
            [gender.value, age.value] = genderAge.textContent.split(', ');
            task.value = description.textContent.split('Dish description: ')[1];
            li.remove();
        }
    });
}
