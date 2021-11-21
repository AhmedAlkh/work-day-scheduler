// Display the current date at the top of the page
var currentDay = moment().format("MMM Do YY"); 
$("#currentDay").text(currentDay);

// Global - represents color coded text boxes. 
var taskBoxEl = document.getElementsByClassName("time-block");

// colour coding past, present, future
var colorCoding = function() {
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
    colorCoding();

// save button functionality

$(".saveBtn").on("click", function() {
    var textEntered = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");

    localStorage.setItem(textEntered, timeStamp);
});

// var saveButton = document.getElementsByClassName("saveBtn");
// console.log(saveButton);
//localStorage.setItem("savedTask", JSON.stringify(savedTask));
// saveButton.addEventListener("click")