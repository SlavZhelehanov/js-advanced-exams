window.addEventListener('load', solution);

function solution() {
    const [fname, email, phone, address, code, submitBTN] = document.getElementById('form').getElementsByTagName('input');
    const infoPreview = document.getElementById('infoPreview');
    const [editBTN, continueBTN] = document.getElementsByClassName('actions')[0].getElementsByTagName('input');

    submitBTN.addEventListener('click', (e) => {
        e.preventDefault();

        if (fname.value !== '' && email.value !== '') { // && phone.value !== '' && address.value !== '' && code.value !== '') {
            infoPreview.innerHTML = `<li>Full Name: ${fname.value}</li>
<li>Email: ${email.value}</li>
<li>Phone Number: ${phone.value}</li>
<li>Address: ${address.value}</li>
<li>Postal Code: ${code.value}</li>`;
            [fname.value, email.value, phone.value, address.value, code.value, submitBTN.disabled, editBTN.disabled, continueBTN.disabled] = ['', '', '', '', '', true, false, false];
        }
    });
}
