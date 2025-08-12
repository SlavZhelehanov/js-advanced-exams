function solution() {
    const [addGifts, listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('section');
    const input = addGifts.querySelector('input');

    addGifts.querySelector('button').addEventListener('click', e => {
        if (input.value.trim() !== '') {
            const ul = listOfGifts.querySelector('ul');

            ul.innerHTML += `<li class="gift">${input.value.trim()}
<button id="sendButton">Send</button>
<button id="discardButton">Discard</button>
</li>`;
            Array.from(ul.getElementsByTagName("LI")).sort((a, b) => a.firstChild.textContent.trim().localeCompare(b.firstChild.textContent.trim())).forEach(li => ul.appendChild(li));
            input.value = '';
        }
    });

    listOfGifts.querySelector('ul').addEventListener('click', e => {
        if (e.target.id === 'sendButton') {
            const li = e.target.parentNode;

            li.querySelector('#sendButton').remove();
            li.querySelector('#discardButton').remove();
            sentGifts.querySelector('ul').appendChild(li);
        }
    });
}