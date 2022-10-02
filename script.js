var currentDayEl = $('#currentDay');

//creates an array of hours to loop through
var hourRow = [
    {
        hour: "9",
        box: "0",

    }
]



//This displays the current day and date at the top of the calendar.
function currentDate() {
    var rightNow = moment().format('dddd, MMMM Do, YYYY');
    currentDayEl.text(rightNow);
    console.log(rightNow)
  }

//timeblocks for the day


  //create time column 

 //create event info box
  //create save button

//timeblocks are color coded for past, present, future

//event for clicking on timeblock

//enter text into timeblock

//text for event into local storage



//This calls the current day/date function
currentDate()