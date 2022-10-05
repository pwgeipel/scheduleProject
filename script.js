//empty array for tasks
var tasks = [];
//gets items from localStorage
function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = [{
            time: "",
            task: ""
        }]
    };

    for (var i = 0; i < tasks.length; i++) {
        if (!tasks[i]) {
            tasks[i] = {
                time: "",
                task: ""
            }
        };
    };
    tasks.forEach((task) => {
        addTask(task.time, task.task);
    });
};
//adds text of created event to timeblock
function addTask (taskTime, taskText) {
    const taskItem = $("<p>").addClass("m-2 task-item").text(taskText)

    $("#hr-" + taskTime).find(".time-block").append(taskItem)
}
//saves tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
//creates the elements showing the time of each timeblock
$(".time-slot").on("click", ".time-block", function() {
    const text = $(this).text().trim();
    const textInput = $("<textarea>")
        .addClass("col-8 form-control")
        .val(text);

    $(this).replaceWith(textInput);
});
//eventlistener for save button
$(".saveBtn").on("click", function() {
    const textArea = $(this).closest(".time-slot").find(".form-control")

    const text = textArea.val().trim();
//converts entered text into taskText
    const taskText = $("<div>")
        .addClass("col-8 time-block")
        .html("<p class='m-2 task-item'>" + text + "</p>");

    textArea.replaceWith(taskText);

    const taskIndex = $(this).closest(".time-slot").index();

    const taskTime = $(this)
        .closest(".time-slot")
        .attr("id")
        .replace("hr-", "");

    const taskObj = {
        time: taskTime,
        task: text
    }

    tasks[taskIndex] = taskObj;
    saveTasks();
    auditTime();
})    
//This displays the current day and date at the top of the calendar.
function currentDate() {
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'))   
  }
//timeblocks are color coded for past, present, future
function auditTime() {
    const currentHour = moment().hour();

    for (i = 9; i < 18; i++) {
        const timeBlock = $("#hr-" + i).find(".time-block");
        timeBlock.removeClass("past present future");

        if (currentHour < i) {
            timeBlock.addClass("future");
        }
        else if (currentHour > i) {
            timeBlock.addClass("past");
        }
        else {
            timeBlock.addClass("present");
        }
    }
}
//calls the date, loadtasks, and audittime functions
currentDate();
auditTime();
loadTasks();