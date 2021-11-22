$(document).ready(function () {    
  
// Display the current date at the top of the page
var currentDay = moment().format("MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

//colour coding past, present, future
var getTime = function() {
// get current time to use as condition
var currentTime = moment().hour();

    $(".time-block").each(function() {
        var timeSlot = parseInt($(this).attr("id").split("hour")[1]);
        if (currentTime > timeSlot) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (currentTime === timeSlot) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
getTime();

// save button functionality
$(".saveBtn").on("click", function() {
    var textEntered = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");
    localStorage.setItem(textEntered, timeStamp);
    console.log(localStorage);
});

});    