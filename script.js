$(".time-slot").on("click", ".time-block", function() {
    const text = $(this).text().trim();
    const textInput = $("<textarea>")
        .addClass("col-8 form-control")
        .val(text);

    $(this).replaceWith(textInput);
})


//This displays the current day and date at the top of the calendar.
function currentDate() {
    var rightNow = moment().format('dddd, MMMM Do, YYYY');
    currentDayEl.text(rightNow);
    console.log(rightNow)
  }


//timeblocks are color coded for past, present, future
function auditTime() {
    const currentHour = moment().hour();

    for (i = 9; i < 18; i++) {
        const timeBlock = $("#hr-" + 1).find(".time-block");
        timeBlock.removeClass("past present future");

        if (currentHour < i) {
            timeBlock.addClass("past")
        }
        else if (currentHour > i) {
            timeBlock.addClass("future")
        }
        else {
            timeBlock.addClass("present")
        }
    }
}
//event for clicking on timeblock

//enter text into timeblock

//text for event into local storage



//This calls the current day/date function
currentDate()