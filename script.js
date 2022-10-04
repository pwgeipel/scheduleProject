var tasks = [];

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

function addTask (taskTime, taskText) {
    const taskItem = $("<p>").addClass("m-2 task-item").text(taskText)

    $("#hr-" + taskTime).find(".time-block").append(taskItem)
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

$(".time-slot").on("click", ".time-block", function() {
    const text = $(this).text().trim();
    const textInput = $("<textarea>")
        .addClass("col-8 form-control")
        .val(text);

    $(this).replaceWith(textInput);
});

$(".saveBtn").on("click", function() {
    const textArea = $(this).closest(".time-slot").find(".form-control")

    const text = textArea.val().trim();

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

currentDate();
auditTime();
loadTasks();