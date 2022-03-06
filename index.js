const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const themeBtn = document.getElementById("theme-button");
const shadow = document.getElementById("shadow");
const dateControls = document.getElementsByClassName("date-control");
const logo = document.getElementById("logo");
let themeIndicator = 0;

const timeToFormat = (time) => {
    return time < 10 ? `0${time}` : time;
};

function countdownNewYear() {
    const today = new Date();
    const currentYear = (today.getFullYear() + 1);
    const currentYearString = currentYear.toString();

    const nextNewYear = "1 Jan " + currentYearString;
    const newYear = new Date(nextNewYear);

    const totalSeconds = (newYear - today) / 1000;

    const daysDisplay = Math.floor(totalSeconds / 60 / 60 / 24);
    const hoursDisplay = Math.floor(totalSeconds / 60 / 60) % 24;
    const minutesDisplay = Math.floor(totalSeconds / 60) % 60;
    const secondsDisplay = Math.floor(totalSeconds) % 60;

    days.innerHTML = timeToFormat(daysDisplay);
    hours.innerHTML = timeToFormat(hoursDisplay);
    minutes.innerHTML = timeToFormat(minutesDisplay);
    seconds.innerHTML = timeToFormat(secondsDisplay);
}


countdownNewYear();

setInterval(countdownNewYear, 1000);

themeBtn.addEventListener('click', () => {
    if (themeIndicator === 0) {
        themeBtn.innerHTML = `Light Theme <img src="./images/sun.svg" alt="light theme icon">`
        shadow.style.backgroundColor = "rgba(0,0,0,0.9)";
        logo.style.color = "#800080";
        themeBtn.style.color = "inherit";
        themeBtn.style.boxShadow = "0.1rem 0.1rem 0.1rem rgba(255,255,255,0.8)"

        for (let i = 0; i < dateControls.length; i++) {
            dateControls[i].style.color = "#800080";
        }

        themeIndicator = 1;

    } else {
        themeBtn.innerHTML = `Dracule Theme <img src="./images/dark.svg" alt="dark theme icon">`;
        shadow.style.backgroundColor = "rgba(0,0,0,0.5)";
        logo.style.color = "inherit";
        themeBtn.style.color = "#fff";
        themeBtn.style.boxShadow = "0.1rem 0.1rem 0.1rem rgba(149,128,255,0.8)"

        for (let i = 0; i < dateControls.length; i++) {
            dateControls[i].style.color = "inherit";
        }

        themeIndicator = 0;
    }

})