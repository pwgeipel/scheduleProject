var currentDayEl = $('#currentDay');

//This displays the current day and date at the top of the calendar.
function currentDate() {
    var rightNow = moment().format('dddd, MMMM Do, YYYY');
    currentDayEl.text(rightNow);
    console.log(rightNow)
  }

//timeblocks for the day

//timeblocks are color coded for past, present, future

//event for clicking on timeblock

//enter text into timeblock

//text for event into local storage




currentDate()