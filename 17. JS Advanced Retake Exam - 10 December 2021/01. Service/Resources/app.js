window.addEventListener('load', solve);

function solve() {
    const typeProduct = document.getElementById("type-product");
    const description = document.getElementById("description");
    const clientName = document.getElementById("client-name");
    const clientPhone = document.getElementById("client-phone");
    const submit = document.getElementsByTagName("form")[0].getElementsByTagName("button")[0];
    const receivedOrders = document.getElementById("received-orders");
    const completedOrders = document.getElementById("completed-orders");

    submit.addEventListener("click", e => {
        e.preventDefault();

        if (typeProduct.value !== "" && clientName.value !== "" && description.value !== "" && clientPhone.value !== "") {
            receivedOrders.innerHTML += `<div class="container">
<h2>Product type for repair: ${typeProduct.value}</h2>
<h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
<h4>Description of the problem: ${description.value}</h4>
<button class="start-btn">Start repair</button>
<button class="finish-btn" disabled>Finish repair</button>
</div>`;
            [typeProduct.value, description.value, clientName.value, clientPhone.value] = ["", "", "", ""];
        }
    });

    receivedOrders.addEventListener("click", e => {
        if (e.target.classList.contains("start-btn")) {
            const container = e.target.parentNode;
            const [start, finish] = container.getElementsByTagName("button");

            start.disabled = true;
            finish.disabled = false;
        } else if (e.target.classList.contains("finish-btn")) {
            const container = e.target.parentNode;
            const [start, finish] = container.getElementsByTagName("button");

            start.remove();
            finish.remove();
            completedOrders.appendChild(container);
        }
    });
}