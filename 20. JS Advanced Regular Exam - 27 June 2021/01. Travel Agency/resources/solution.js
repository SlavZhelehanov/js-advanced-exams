window.addEventListener('load', solution);

function solution() {
    const [fname, email, phone, address, code, submitBTN, editBTN, continueBTN] = document.getElementsByTagName('input');
    const infoPreview = document.getElementById('infoPreview');

    let data = [];

    submitBTN.addEventListener('click', (e) => {
        e.preventDefault();

        if (fname.value !== '' && email.value !== '') {
            infoPreview.innerHTML = `<li>Full Name: ${fname.value}</li>
<li>Email: ${email.value}</li>
<li>Phone Number: ${phone.value}</li>
<li>Address: ${address.value}</li>
<li>Postal Code: ${code.value}</li>`;
            data = [fname.value, email.value, phone.value, address.value, code.value];
            [fname.value, email.value, phone.value, address.value, code.value, submitBTN.disabled, editBTN.disabled, continueBTN.disabled] = ['', '', '', '', '', true, false, false];
        }
    });

    editBTN.addEventListener('click', (e) => {
        [fname.value, email.value, phone.value, address.value, code.value] = data;
        [submitBTN.disabled, editBTN.disabled, continueBTN.disabled] = [false, true, true];
        infoPreview.innerHTML = '';
    });

    continueBTN.addEventListener('click', () => {document.getElementById('block').innerHTML = '<h3>Thank you for your reservation!</h3>';});
}
