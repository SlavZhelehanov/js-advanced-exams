window.addEventListener("load", solve);

function solve() {
    const color = document.getElementById("colors");
    const model = document.getElementById("motorcycles");
    const datetime = document.getElementById("datetime");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");

    const testRideBtn = document.getElementById("test-ride-btn");
    const previewList = document.getElementById("preview-list");
    const completeList = document.getElementById("complete-list");
    const dataView = document.getElementsByClassName("data-view")[0];

    testRideBtn.addEventListener("click", e => {
        e.preventDefault();

        if (0 < color.value.length && 0 < model.value.length && 0 < datetime.value.length && 0 < fullName.value.length && 0 < email.value.length) {
            previewList.innerHTML += `<li>
        <article>
          <p>Color: ${color.value}</p>
          <p>Model: ${model.value}</p>
          <p>For: ${fullName.value}</p>
          <p>Contact: ${email.value}</p>
          <p>Test Ride On: ${datetime.value}</p>
        </article>
        <div class="btn-container">
          <button class="edit-btn">Edit</button>
          <button class="next-btn">Next</button>
        </div>
      </li>`;

            color.value = '';
            model.value = '';
            datetime.value = '';
            fullName.value = '';
            email.value = '';
            testRideBtn.disabled = true;

            const editBtn = document.getElementsByClassName("edit-btn")[0];
            const nextBtn = document.getElementsByClassName("next-btn")[0];

            editBtn.addEventListener("click", eEbtn => {
                eEbtn.preventDefault();

                [color.value, model.value, fullName.value, email.value, datetime.value] = [...document.querySelectorAll('p')].map(e => e = e.innerText.split(": ")[1]);
                testRideBtn.disabled = false;
                previewList.innerHTML = '';
            });

            nextBtn.addEventListener("click", eNbtn => {
                eNbtn.preventDefault();

                const [colorValue, modelValue, fullNameValue, emailValue, datetimeValue] = [...document.querySelectorAll('p')].map(e => e = e.innerText.split(": ")[1]);

                completeList.innerHTML += `<li>
          <article>
            <p>Color: ${colorValue}</p>
            <p>Model: ${modelValue}</p>
            <p>For: ${fullNameValue}</p>
            <p>Contact: ${emailValue}</p>
            <p>Test Ride On: ${datetimeValue}</p>
            <button class="complete-btn">Complete</button>
          </article>
        </li>`;

                previewList.innerHTML = '';

                document.getElementsByClassName("complete-btn")[0].addEventListener("click", eCmpBtn => {
                    eCmpBtn.preventDefault();

                    completeList.innerHTML = '';
                    dataView.innerHTML += `<button class="confirm-btn">Your Test Ride is Confirmed</button>`;

                    document.getElementsByClassName("confirm-btn")[0].addEventListener("click", eCnfBtn => {
                        eCnfBtn.preventDefault();

                        location.reload();
                    });
                });
            });
        }
    });
}
