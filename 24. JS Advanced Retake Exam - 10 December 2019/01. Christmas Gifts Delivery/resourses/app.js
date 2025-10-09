function solution() {
    const input = document.querySelector('input');
    const addButton = document.querySelector('button');
    const listOfGifts = document.querySelector('.card:nth-of-type(2) ul');
    const sentGifts = document.querySelector('.card:nth-of-type(3) ul');
    const discardedGifts = document.querySelector('.card:nth-of-type(4) ul');

    addButton.addEventListener('click', addGift);

    function addGift() {
        const giftName = input.value.trim();

        if (giftName === '') return;

        const li = document.createElement('li');
        li.textContent = giftName;
        li.classList.add('gift');

        const sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.id = 'sendButton';

        const discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.id = 'discardButton';

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        listOfGifts.appendChild(li);
        input.value = '';
    }
}