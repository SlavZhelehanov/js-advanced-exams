window.addEventListener('load', solve);

function solve() {
    const [firstName, lastName, peopleCount, fromDate, daysCount] = document.getElementsByTagName('input');
    const nextBtn = document.getElementById('next-btn');
    const [ticketInfoList, confirmTicket] = document.getElementsByTagName('ul');

    let formData = [];

    nextBtn.addEventListener('click', e => {
        e.preventDefault();

        if (firstName.value.trim() !== '' && lastName.value.trim() !== '' && peopleCount.value.trim() !== '' && fromDate.value.trim() !== '' && daysCount.value.trim() !== '' && daysCount.value.trim() !== '') {
            ticketInfoList.innerHTML = `<li class="ticket">
            <article>
<h3>Name: ${firstName.value.trim()} ${lastName.value.trim()}</h3>
<p>From date: ${fromDate.value.trim()}</p>
<p>For ${daysCount.value.trim()} days</p>
<p>For ${peopleCount.value.trim()} people</p>            
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>
            </li>`;
            formData.push(firstName.value.trim(), lastName.value.trim(), peopleCount.value.trim(), fromDate.value.trim(), daysCount.value.trim());
            [firstName.value, lastName.value, peopleCount.value, fromDate.value, daysCount.value] = ['', '', '', '', ''];
            nextBtn.disabled = true;
        }
    });

    ticketInfoList.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            e.target.parentNode.remove();
            [firstName.value, lastName.value, peopleCount.value, fromDate.value, daysCount.value] = formData;
            formData = [];
            nextBtn.disabled = false;
        } else if (e.target.classList.contains('continue-btn')) {
            const li = e.target.parentNode;
            const [firstBtn, secondBtn] = li.getElementsByTagName('button');

            li.className = 'ticket-content';
            firstBtn.className = 'confirm-btn';
            secondBtn.className = 'cancel-btn';
            firstBtn.textContent = 'Confirm';
            secondBtn.textContent = 'Cancel';
            confirmTicket.appendChild(li);
        }
    });

    confirmTicket.addEventListener('click', e => {
        if (e.target.classList.contains('cancel-btn')) {
            e.target.parentNode.remove();
            nextBtn.disabled = false;
        } else if (e.target.classList.contains('confirm-btn')) {
            document.getElementById('body').innerHTML = `<h1 id="thank-you">Thank you, have a nice day</h1><button id="back-btn">Back</button>`;
        }
    });
}


    
    
