$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //moment.js to put current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);

    // var timeBlock = [moment().hours(9).format("h A")];
    // console.log(timeBlock);

    x.forEach(function (time) {
        var startTime = [];
        // currTime.push(time);
        startTime.push(moment().hour(time).format("h A"));

        var newDiv = $("<div>"); // never using this???
        var newSpan = $("<span>"); // never using this???
        var newTextArea = $("<textarea>");
        var newBtn = $("<button>"); // never using this???

        $(".container").append(newDiv);
        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.append(newSpan);
        newSpan.addClass("start-time input-group-text");
        newSpan.text(startTime);
        newDiv.append(newTextArea);
        newTextArea.addClass("form-control")
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary"); ``

    });

    //updated width of time block span and changed btn text to "SAVE"
    // Consider using fontawesome icon for save feature
    $(".input-group-text").css("width", "100px");
    $(".btn").text("SAVE");







})







