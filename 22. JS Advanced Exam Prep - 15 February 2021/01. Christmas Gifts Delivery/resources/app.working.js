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

        // Create list item
        const li = document.createElement('li');
        li.textContent = giftName;
        li.classList.add('gift');

        // Create Send button
        const sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.id = 'sendButton';
        sendBtn.addEventListener('click', () => sendGift(giftName, li));

        // Create Discard button
        const discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.id = 'discardButton';
        discardBtn.addEventListener('click', () => discardGift(giftName, li));

        // Append buttons
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        // Add to gifts list
        listOfGifts.appendChild(li);

        // Sort gifts alphabetically
        sortGifts();

        // Clear input
        input.value = '';
    }

    function sortGifts() {
        const items = Array.from(listOfGifts.children);
        const sorted = items.sort((a, b) => a.textContent.localeCompare(b.textContent));
        sorted.forEach(item => listOfGifts.appendChild(item));
    }

    function sendGift(name, li) {
        li.remove(); // remove from current list
        const sentItem = document.createElement('li');
        sentItem.textContent = name;
        sentGifts.appendChild(sentItem);
    }

    function discardGift(name, li) {
        li.remove(); // remove from current list
        const discardedItem = document.createElement('li');
        discardedItem.textContent = name;
        discardedGifts.appendChild(discardedItem);
    }
}
