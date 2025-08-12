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
}