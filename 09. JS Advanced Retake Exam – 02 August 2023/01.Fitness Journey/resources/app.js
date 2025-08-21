window.addEventListener('load', solve);

function solve() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contactNumber = document.getElementById('contact-number');
    const classType = document.getElementById('class-type');
    const classTime = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const classInfo = document.getElementsByClassName('class-info')[0];

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
}




