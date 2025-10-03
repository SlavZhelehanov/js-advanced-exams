function solution() {
    const [addGifts, listOfGigts, sentGifts, discardedGifts] = document.getElementsByClassName('card');
    const giftName = addGifts.getElementsByTagName('input')[0];
    const addBtn = addGifts.getElementsByTagName('button')[0];
    const listOfGiftsUl = listOfGigts.getElementsByTagName('ul')[0];
    const sentGiftsUl = sentGifts.getElementsByTagName('ul')[0];
    const discardGiftsUl = discardedGifts.getElementsByTagName('ul')[0];

    let allGifts = [];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        allGifts.push(giftName.value);
        listOfGiftsUl.innerHTML = '';
        giftName.value = '';
        allGifts.sort((a, b) => a.localeCompare(b)).forEach(gift => {
            listOfGiftsUl.innerHTML += `<li>${gift}
<button id="sendButton">Send</button>
<button id="discardButton">Discard</button>
</li>`;
        });
    });

    listOfGiftsUl.addEventListener('click', (e) => {
        if (e.target.id === 'sendButton') {
            const li = e.target.parentElement;
            const [sendbutton, discardbutton] = li.getElementsByTagName('button');

            sendbutton.remove();
            discardbutton.remove();
            allGifts = allGifts.filter(g => g !== li.textContent.trim());
            sentGiftsUl.appendChild(li);
        } else if (e.target.id === 'discardButton') {
            const li = e.target.parentElement;
            const [sendbutton, discardbutton] = li.getElementsByTagName('button');

            sendbutton.remove();
            discardbutton.remove();
            allGifts = allGifts.filter(g => g !== li.textContent.trim());
            discardGiftsUl.appendChild(li);
        }
    });
}