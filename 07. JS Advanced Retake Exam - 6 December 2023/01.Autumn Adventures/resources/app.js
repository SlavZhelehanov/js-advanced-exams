window.addEventListener('load', solve);

function solve() {
    const [time, date, place, eventName, email, addBtn] = document.querySelectorAll('input');
    const checkList = document.querySelector('#check-list');
    const upcomingList = document.querySelector('#upcoming-list');
    const finishedList = document.querySelector('#finished-list');
    const clear = document.querySelector('#clear');

    let inputsForEdit = [];

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
            inputsForEdit = [];
            inputsForEdit.push(time.value);
            time.value = '';
            inputsForEdit.push(date.value);
            date.value = '';
            inputsForEdit.push(place.value);
            place.value = '';
            inputsForEdit.push(eventName.value);
            eventName.value = '';
            inputsForEdit.push(email.value);
            email.value = '';
            addBtn.disabled = true;
        }
    });

    checkList.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            const li = e.target.parentNode;
            const [pDateAndTime, pPlace, pEventName, pEmail] = li.querySelectorAll('p');

            time.value = inputsForEdit.shift();//pDateAndTime.textContent.split(' ')[3];
            date.value = inputsForEdit.shift();//pDateAndTime.textContent.split(' ')[1];
            place.value = inputsForEdit.shift();//pPlace.textContent.split(' ')[1];
            eventName.value = inputsForEdit.shift();//pEventName.textContent.split(' ')[1];
            email.value = inputsForEdit.shift();//pEmail.textContent.split(' ')[1];
            addBtn.disabled = false;
            li.remove();
            inputsForEdit = [];
        } else if (e.target.classList.contains('continue-btn')) {
            const li = e.target.parentNode;

            li.querySelector('.edit-btn').remove();
            li.querySelector('.continue-btn').remove();
            li.innerHTML += `<button class="finished-btn">Move to Finished</button>`;
            upcomingList.appendChild(li);
            addBtn.disabled = false;
            inputsForEdit = [];
        }
    });

    upcomingList.addEventListener('click', e => {
        if (e.target.classList.contains('finished-btn')) {
            const li = e.target.parentNode;

            li.querySelector('.finished-btn').remove();
            finishedList.appendChild(li);
            inputsForEdit = [];
        }
    });

    clear.addEventListener('click', e => {
        finishedList.innerHTML = '';
        addBtn.disabled = false;
        inputsForEdit = [];
    });
}


    
    
