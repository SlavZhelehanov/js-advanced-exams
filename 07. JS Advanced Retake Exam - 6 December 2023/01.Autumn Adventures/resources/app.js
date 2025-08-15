window.addEventListener('load', solve);

function solve() {
    const [time, date, place, eventName, email, addBtn] = document.querySelectorAll('input');
    const checkList = document.querySelector('#check-list');

    addBtn.addEventListener('click', e => {
        e.preventDefault();

        if (time.value !== '' && date.value !== '' && place.value !== '' && eventName.value !== '' && email.value !== '') {
            checkList.innerHTML = `<li class="event-content">
<article>
<p>Begins: ${date.value} at: ${time.value}</p>
<p>In: ${place.value} </p>
<p>Event: ${eventName.value} </p>
<p>Contact: ${email.value} </p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>
</li>`;
            time.value = '';
            date.value = '';
            place.value = '';
            eventName.value = '';
            email.value = '';
            addBtn.disabled = true;
        }
    });

    checkList.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            const li = e.target.parentNode;
            const [pDateAndTime, pPlace, pEventName, pEmail] = li.querySelectorAll('p');

            time.value = pDateAndTime.textContent.split(' ')[3];
            date.value = pDateAndTime.textContent.split(' ')[1];
            place.value = pPlace.textContent.split(' ')[1];
            eventName.value = pEventName.textContent.split(' ')[1];
            email.value = pEmail.textContent.split(' ')[1];
            addBtn.disabled = false;
            li.remove();
        }
    });
}


    
    
