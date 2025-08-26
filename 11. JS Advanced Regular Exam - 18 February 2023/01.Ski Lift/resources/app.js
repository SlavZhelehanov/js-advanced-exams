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
}


    
    
