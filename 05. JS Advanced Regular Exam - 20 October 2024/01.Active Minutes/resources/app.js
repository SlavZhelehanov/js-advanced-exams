window.addEventListener("load", solve);

function solve() {
    const activityType = document.getElementById("type");
    const intensity = document.getElementById("intensity");
    const calories = document.getElementById("calories");
    const duration = document.getElementById("duration");
    const date = document.getElementById("date");
    const addActivity = document.getElementById("add-activity");
    const previewActivity = document.getElementById("preview-activity");
    const activitiesTable = document.getElementById("activities-table");

    addActivity.addEventListener("click", e => {
        e.preventDefault();

        if (activityType.value !== '' && intensity.value !== '' && calories.value !== '' && duration.value !== '' && date.value !== '') {
            previewActivity.innerHTML = `<li>
<article>
<p>Activity: ${activityType.value}</p>
<p>Intensity: ${intensity.value}</p>
<p>Duration: ${duration.value} min.</p>
<p>Date: ${date.value}</p>
<p>Calories: ${calories.value}</p>
</article>
<div class="btn-container">
<button class="edit-btn">Edit</button>
<button class="next-btn">Next</button>
</div>
</li>`;
            activityType.value = '';
            intensity.value = '';
            calories.value = '';
            duration.value = '';
            date.value = '';
            addActivity.disabled = true;
        }
    });

    previewActivity.addEventListener("click", e => {
        if (e.target.classList.contains("edit-btn")) {
            const li = e.target.parentNode.parentNode;
            const [pActivity, pIntesity, pDuration, pDate, pCalories] = li.querySelectorAll('article>p');

            activityType.value = pActivity.textContent.split("Activity: ")[1];
            intensity.value = pIntesity.textContent.split("Intensity: ")[1];
            calories.value = pCalories.textContent.split("Calories: ")[1];
            duration.value = pDuration.textContent.split(" ")[1];
            date.value = pDate.textContent.split("Date: ")[1];
            addActivity.disabled = false;
            li.remove();
        } else if (e.target.classList.contains("next-btn")) {
            const li = e.target.parentNode.parentNode;
            const [pActivity, pIntesity, pDuration, pDate, pCalories] = li.querySelectorAll('article>p');

            activitiesTable.innerHTML += `<tr>
<td class="type-cell">${pActivity.textContent.split(" ")[1]}</td>
<td class="duration-cell">${pDuration.textContent.split(" ")[1]}</td>
<td class="calories-cell">${pCalories.textContent.split(" ")[1]}</td>
<td class="date-cell">${pDate.textContent.split(" ")[1]}</td>
<td class="intensity-cell">${pIntesity.textContent.split(" ")[1]}</td>
<td class="btn-cell"><button class="delete-btn">Delete</button></td>
</tr>`;
            addActivity.disabled = false;
            li.remove();
        }
    });
}
