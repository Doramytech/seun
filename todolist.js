const pushtask = document.querySelector("#push");
const input = document.getElementById("input");



pushtask.addEventListener("click", (event) => {
    const input = document.getElementById("input");
    const taskname = document.getElementById("taskname");

    if (input.value.length === 0) {
        alert("Please Enter a task");
    } else {
        taskname.innerHTML += `<li>${input.value}</li>`;
        input.value = ""; // Clear input after adding
    }
})




