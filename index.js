const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

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
    const minutesDisplay = Math.floor(totalSeconds/ 60 ) % 60;
    const secondsDisplay = Math.floor(totalSeconds) % 60;

    days.innerHTML = timeToFormat(daysDisplay);
    hours.innerHTML = timeToFormat(hoursDisplay);
    minutes.innerHTML = timeToFormat(minutesDisplay);
    seconds.innerHTML = timeToFormat(secondsDisplay);
}


countdownNewYear();

setInterval(countdownNewYear, 1000);