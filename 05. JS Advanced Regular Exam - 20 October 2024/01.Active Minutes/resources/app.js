window.addEventListener("load", solve);

function solve() {
    const activityType = document.getElementById("type");
    const intensity = document.getElementById("intensity");
    const calories = document.getElementById("calories");
    const duration = document.getElementById("duration");
    const date = document.getElementById("date");
    const addActivity = document.getElementById("add-activity");
    const previewActivity = document.getElementById("preview-activity");

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
}
