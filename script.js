const startButton = document.querySelector(".primary-btn");
const progressButton = document.querySelector(".secondary-btn");
const navButton = document.querySelector(".nav-button");

startButton.addEventListener("click", () => {
    alert("Tracking started ✨ Time to drink water, hit your protein, and move your body.");
});

progressButton.addEventListener("click", () => {
    alert("Progress dashboard coming soon 💪");
});

navButton.addEventListener("click", () => {
    alert("Premium features coming soon 🤍");
});
const input = document.querySelector("input");
const logButton = document.querySelector(".log-btn");
const logList = document.querySelector(".log-list");

logButton.addEventListener("click", () => {
    if (input.value.trim() === "") {
        return;
    }

    const newLog = document.createElement("li");
    newLog.textContent = input.value;

    logList.appendChild(newLog);

    input.value = "";
});