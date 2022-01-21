let alarmBtn = document.getElementById("alarmBtn");

function callAlarm() {
    // console.log("Alarm set");
    let inputTime = document.getElementById("inputTime");
    alarmTime = new Date(inputTime.value);
    currentTime = new Date();
    let timeToRing = alarmTime - currentTime;
    if (timeToRing >= 0) {
        setTimeout(() => {
            ringAlarm();
        }, timeToRing);
    }
}

function ringAlarm() {
    let audio = new Audio(
        "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
    );
    audio.play();
}

alarmBtn.addEventListener("click", callAlarm);
