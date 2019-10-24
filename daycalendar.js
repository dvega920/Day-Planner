$(document).ready(function(){

/* Pseudo Code

*** Front end ****
- Bootstrap jumbotron
    h1 title 
    p subtitle (brief description of app)  
    p to store currentdate
    hr for separation of header and body
- body div id=container
    - Bootstrap
        - Time blocks
            - input text with text area for
            - addon button append to input text area
- CSS stylesheet
    - create color classes: 
        .past {
            background color: gray;
        }
        .present {
            background color: red;
        }
        .future {
            background color: green;
        }


*** Back end ***

    GET user input and store in ls
    click event for time block to save to ls
*/


//moment.js to put current date on jumbotron
var currentDate = moment().format('dddd, LL');
$("#currentDay").text(currentDate);

$(".input-group-text").css("width", "100px");
$(".btn").text("SAVE");







})







