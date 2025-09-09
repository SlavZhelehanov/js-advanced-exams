function solve() {
    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const [listOfMails, sentMails, deletedMails] = document.getElementsByTagName("ul");

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (recipientName.value.trim() !== '' || title.value.trim() !== '' || message.value.trim() !== '') {
            listOfMails.innerHTML += `<li>
                    <h4>Title: ${title.value.trim()}</h4>
                    <h4>Recipient Name: ${recipientName.value.trim()}</h4>
                    <span>${message.value.trim()}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>
                </li>`;

            [recipientName.value, title.value, message.value] = ['', '', ''];
        }
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        [recipientName.value, title.value, message.value] = ['', '', ''];
    });

    listOfMails.addEventListener('click', (e) => {
        if (e.target.id === 'send') {
            const li = e.target.parentElement.parentElement;
            const [h4Title, h4Name] = li.querySelectorAll('h4');

            sentMails.innerHTML += `<li>
                        <span>To: ${h4Name.textContent.split('Name: ')[1]}</span>
                        <span>Title: ${h4Title.textContent.split('Title: ')[1]}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>
                    </li>`;
            li.remove();
        }
    });
}

solve()