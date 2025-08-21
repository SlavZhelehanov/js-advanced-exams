window.addEventListener('load', solve);

function solve() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contactNumber = document.getElementById('contact-number');
    const classType = document.getElementById('class-type');
    const classTime = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const classInfo = document.getElementsByClassName('class-info')[0];
    const confirmClass = document.getElementsByClassName('confirm-class')[0];
    const body = document.getElementById('body');

    let inputs = [];

    nextBtn.addEventListener('click', e => {
        e.preventDefault();

        if (name.value.trim() !== '' && email.value.trim() !== '' && contactNumber.value.trim() !== '' && classType.value.trim() !== '' && classTime.value.trim() !== '') {
            classInfo.innerHTML = `<li class="info-item">
<article class="personal-info">
<p>${name.value.trim()}</p>
<p>${email.value.trim()}</p>
<p>${contactNumber.value.trim()}</p>
<p>${classType.value.trim()}</p>
<p>${classTime.value.trim()}</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>
</li>`;
            inputs.push(name.value.trim());
            name.value = '';
            inputs.push(email.value.trim());
            email.value = '';
            inputs.push(contactNumber.value.trim());
            contactNumber.value = '';
            inputs.push(classType.value.trim());
            classType.value = '';
            inputs.push(classTime.value.trim());
            classTime.value = '';
            nextBtn.disabled = true;
        }
    });

    classInfo.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            name.value = inputs.shift();
            email.value = inputs.shift();
            contactNumber.value = inputs.shift();
            classType.value = inputs.shift();
            classTime.value = inputs.shift();
            nextBtn.disabled = false;
            e.target.parentNode.remove();
        } else if (e.target.classList.contains('continue-btn')) {
            const li = e.target.parentNode;
            const editBtn = li.querySelector(".edit-btn");
            const continueBtn = li.querySelector(".continue-btn");

            editBtn.className = "cancel-btn";
            editBtn.textContent = "Cancel";
            continueBtn.className = "confirm-btn";
            continueBtn.textContent = "Confirm";
            confirmClass.appendChild(li);
        }
    });

    confirmClass.addEventListener('click', e => {
        if (e.target.classList.contains('cancel-btn')) {
            e.target.parentNode.remove();
            nextBtn.disabled = false;
        } else if (e.target.classList.contains('confirm-btn')) body.innerHTML = `<h1 id="thank-you">Thank you for scheduling your appointment, we look forward to seeing you!</h1>
<button id="done-btn">Done</button>`;
    });
}




