'use strict';

// Function to update the current day and time
function updateDateTime() {
 const currentDay = document.getElementById("currentDayOfTheWeek");
 const currentUTCTime = document.getElementById("currentUTCTime");

 const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const now = new Date();
 const dayOfWeek = daysOfWeek[now.getUTCDay()];
 const time = now.getUTCHours() + ":" + (now.getUTCMinutes() < 10 ? "0" : "") + now.getUTCMinutes();

 currentDay.textContent = "Day of the Week: " + dayOfWeek;
 currentUTCTime.textContent = "UTC Time: " + time;
}

// Call the function initially and set an interval to update it every minute
updateDateTime();
setInterval(updateDateTime, 60000);