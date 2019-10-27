$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //moment.js to put current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);

    //forEach loops through x[], pushes "time" elements to new startTime[] in the "00 AM/PM" format
    x.forEach(function (time) {
        var startTime = [];
        // currTime.push(time);
        startTime.push(moment().hour(time).format("h A"));

    //Declare new var(s) and initialize to new el's needed        
        var newDiv = $("<div>"); 
        var newSpan = $("<span>"); 
        var newTextArea = $("<textarea>");
        var newBtn = $("<button>"); 


    //appends new el's to container, parent or sibling respectively. Adds B/S classes to new el's 
        $(".container").append(newDiv);
        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.append(newSpan);
        newSpan.addClass("start-time input-group-text");
        newSpan.text(startTime);
        newDiv.append(newTextArea);
        newTextArea.addClass("form-control")
        newTextArea.attr("id","text-input")
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary"); ``


    });
    /* END OF FOREACH()*/


    //event 
    $("button").on("click", function(event){
        event.preventDefault();

        var textInput = $("#text-input");

        var textVal = textInput.val();

        // var textVal = $(this).textInput.val();

        // console.log(textInput);

        console.log(textVal);

        if (textVal){
            alert("you've enteredf input");
        } else {
            alert("no inputs");
        }

    })


    //updated width of time block span and changed btn text to "SAVE"
    // Consider using fontawesome icon for save feature
    $(".input-group-text").css("width", "100px");
    $(".btn").text("SAVE"); // update with icon from font-awesome







})






