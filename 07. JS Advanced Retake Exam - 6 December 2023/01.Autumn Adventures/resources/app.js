window.addEventListener('load', solve);

function solve() {
    const [time, date, place, eventName, email, addBtn] = document.querySelectorAll('input');
    const checkList = document.querySelector('#check-list');
    const upcomingList = document.querySelector('#upcoming-list');
    const finishedList = document.querySelector('#finished-list');
    const clear = document.querySelector('#clear');

    addBtn.addEventListener('click', e => {
        e.preventDefault();

        if (time.value.trim() !== '' && date.value.trim() !== '' && place.value.trim() !== '' && eventName.value.trim() !== '' && email.value.trim() !== '') {
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
        } else if (e.target.classList.contains('continue-btn')) {
            const li = e.target.parentNode;

            li.querySelector('.edit-btn').remove();
            li.querySelector('.continue-btn').remove();
            li.innerHTML += `<button class="finished-btn">Move to Finished</button>`;
            upcomingList.appendChild(li);
            addBtn.disabled = false;
        }
    });

    upcomingList.addEventListener('click', e => {
        if (e.target.classList.contains('finished-btn')) {
            const li = e.target.parentNode;

            li.querySelector('.finished-btn').remove();
            finishedList.appendChild(li);
        }
    });

    clear.addEventListener('click', e => {
        finishedList.innerHTML = '';
        addBtn.disabled = false;
    });
}


    
    
