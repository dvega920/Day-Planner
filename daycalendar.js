$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    var currentTime = moment().format("H");

    //moment.js to put current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);

    //forEach loops through x[], pushes "time" elements to new startTime[] in the "00 AM/PM" format
    x.forEach(function (time, index) {
        var startTime = [];
        startTime.push(moment().hour(time).format("h A"));
        // console.log(parseInt(startTime));
        // console.log(moment().hour());

        //Declare new var(s) and initialize to new el's        
        var newDiv = $("<div>");
        var newSpan = $("<span>");
        var newTextInput = $("<input>");
        var newBtn = $("<button>");

        //appends new el's to container, parent or sibling respectively. Adds B/S classes to new el's 
        $(".container").append(newDiv);
        $(".container").addClass("mb-5");
        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.attr("data-val", index);
        newDiv.append(newSpan);
        newSpan.addClass("input-group-text");
        newSpan.addClass("start-time" + index)
        newSpan.text(startTime);
        newDiv.append(newTextInput);
        newTextInput.attr("type", "text");
        newTextInput.addClass("form-control")
        newTextInput.addClass("input-text");
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary");

        /* END OF FOREACH()*/

    });

    $("button").on("click", function () {
        var parInput = $(this).parent().attr("data-val")
        var sibVal = $(this).siblings(".input-text").val();
        localStorage.setItem(parInput, sibVal);
        var lsVal = localStorage.getItem(parInput);
    });

    // console.log(lsVal);
    // console.log(parInput);
    //updated width of time block span and changed btn text to "SAVE"
    // Consider using fontawesome icon for save feature
    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE"); // update with icon from font-awesome


})









