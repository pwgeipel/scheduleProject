$(".time-slot").on("click", ".time-block", function() {
    const text = $(this).text().trim();
    const textInput = $("<textarea>")
        .addClass("col-8 form-control")
        .val(text);
})


//This displays the current day and date at the top of the calendar.
function currentDate() {
    var rightNow = moment().format('dddd, MMMM Do, YYYY');
    currentDayEl.text(rightNow);
    console.log(rightNow)
  }


//timeblocks are color coded for past, present, future

//event for clicking on timeblock

//enter text into timeblock

//text for event into local storage



//This calls the current day/date function
currentDate()