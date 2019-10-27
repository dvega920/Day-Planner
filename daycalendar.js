$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //moment.js to put current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);

    //forEach loops through x[], pushes "time" elements to new startTime[] in the "00 AM/PM" format
    x.forEach(function (time, index) {
        var startTime = [];
        // currTime.push(time);
        startTime.push(moment().hour(time).format("h A"));

        //Declare new var(s) and initialize to new el's needed        
        var newDiv = $("<div>");
        var newSpan = $("<span>");
        var newTextInput = $("<input>");
        var newBtn = $("<button>");


        //appends new el's to container, parent or sibling respectively. Adds B/S classes to new el's 
        $(".container").append(newDiv);
        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.append(newSpan);
        newSpan.addClass("start-time input-group-text");
        newSpan.text(startTime);
        newDiv.append(newTextInput);
        newTextInput.addClass("form-control")
        newTextInput.attr("id", "text-input" + index)
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary");
        newBtn.attr("id", "btn" + index);


    });
    /* END OF FOREACH()*/


    //event 
    $("#btn0").on("click", function (event) {
        event.preventDefault();

        var textInput0 = $("#text-input0");
        var textVal0 = textInput0.val();
        localStorage.setItem("text-input0", textVal0);
        localStorage.getItem(textInput0);

    })
    // var textInput1 = $("#text-input1");
    // var textInput2 = $("#text-input2");
    // var textInput3 = $("#text-input3");
    // var textInput4 = $("#text-input4");
    // var textInput5 = $("#text-input5");
    // var textInput6 = $("#text-input6");
    // var textInput7 = $("#text-input7");
    // var textInput8 = $("#text-input8");

    // var textVal1 = textInput1.val();
    // var textVal2 = textInput2.val();
    // var textVal3 = textInput3.val();
    // var textVal4 = textInput4.val();
    // var textVal5 = textInput5.val();
    // var textVal6 = textInput6.val();
    // var textVal7 = textInput7.val();
    // var textVal8 = textInput8.val();

    // var textVal = $(this).textInput.val();




    // if (textVal){
    //     alert("you've enteredf input");
    // } else {
    //     alert("no inputs");
    // }




    //updated width of time block span and changed btn text to "SAVE"
    // Consider using fontawesome icon for save feature
    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE"); // update with icon from font-awesome







})






