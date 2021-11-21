// Display the current date at the top of the page
var currentDay = moment().format("MMM Do YY"); 
$("#currentDay").text(currentDay);

// Current time to enable color coding
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var currentTime = today + time;

// work day hours variables
// var d = new Date();
// var t = d.toLocaleTimeString();

// Global - represents color coded text boxes.
var taskBoxEl = document.getElementsByClassName("time-block");

// colour coding past, present, future
var colorCode = function() {
    for (var i = 0; i < taskBoxEl.length; i++) {
        var timeSlot = parseInt(taskBoxEl[i].children[0].innerText);
        if (timeSlot < 9) {
            timeSlot = timeSlot + 12;
        }
        if (moment().hour() < timeSlot) {
            taskBoxEl[i].children[1].className += " future";
        } else if
            (moment().hour() > timeSlot) {
                taskBoxEl[i]. children[1].className += " past";
            } else {
                taskBoxEl[i].children[1].className += " present";
            }
        }
    };
    colorCode();

/* set currentTime variable, create colorCode function with if statement.
if currentTime is greater than 9 AM then 9 Am is equal to .past CSS class which will
make the background color of 9 AM grey. */