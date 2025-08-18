window.addEventListener('load', solution);

function solution() {
    const employee = document.getElementById('employee');
    const category = document.getElementById('category');
    const urgency = document.getElementById('urgency');
    const team = document.getElementById('team');
    const description = document.getElementById('description');
    const addBtn = document.getElementById('add-btn');
    const previewList = document.getElementsByClassName('preview-list')[0];

    let inputs = [];

    addBtn.addEventListener('click', e => {
        e.preventDefault();

        if (employee.value.trim() !== '' && category.value.trim() !== '' && urgency.value.trim() !== '' && team.value.trim() !== '' && description.value.trim() !== '') {
            previewList.innerHTML = `<li class="problem-content">
<article>
<p>From: ${employee.value.trim()}</p>
<p>Category: ${category.value.trim()}</p>
<p>Urgency: ${urgency.value.trim()}</p>
<p>Assigned to: ${team.value.trim()}</p>
<p>Description: ${description.value.trim()}</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>
</li>`;
            inputs.push(employee.value.trim());
            employee.value = '';
            inputs.push(category.value.trim());
            category.value = '';
            inputs.push(urgency.value.trim());
            urgency.value = '';
            inputs.push(team.value.trim());
            team.value = '';
            inputs.push(description.value.trim());
            description.value = '';
            addBtn.disabled = true;
        }
    });

    previewList.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            e.target.parentNode.remove();
            employee.value = inputs.shift();
            category.value = inputs.shift();
            urgency.value = inputs.shift();
            team.value = inputs.shift();
            description.value = inputs.shift();
            addBtn.disabled = false;
        }
    });
}


    
    
