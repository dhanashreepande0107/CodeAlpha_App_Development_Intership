let activities =
JSON.parse(localStorage.getItem("activities")) || [];

function addActivity() {

    let steps =
    parseInt(document.getElementById("steps").value) || 0;

    let exercise =
    document.getElementById("exercise").value;

    let duration =
    parseInt(document.getElementById("duration").value) || 0;

    let calories =
    parseInt(document.getElementById("calories").value) || 0;

    activities.push({
        steps,
        exercise,
        duration,
        calories
    });

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

    displayActivities();
}

function displayActivities() {

    let totalSteps = 0;
    let totalCalories = 0;

    let list =
    document.getElementById("activityList");

    list.innerHTML = "";

    activities.forEach(activity => {

        totalSteps += activity.steps;
        totalCalories += activity.calories;

        let li = document.createElement("li");

        li.innerHTML =
        `${activity.exercise}
         - ${activity.duration} mins
         - ${activity.calories} cal`;

        list.appendChild(li);
    });

    document.getElementById("totalSteps")
    .innerText = totalSteps;

    document.getElementById("totalCalories")
    .innerText = totalCalories;

    let progress =
    Math.min((totalSteps / 10000) * 100, 100);

    document.getElementById("progressBar")
    .style.width = progress + "%";
}

displayActivities();