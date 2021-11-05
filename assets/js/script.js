/*

ACCEPTANCE CRITERIA
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist 

*/

// Define any variables and html elements that need to be pulled/manipulated
let currentDay = document.querySelector("#currentDay");
let timeblock = document.querySelectorAll("[data-hour]");

//On page load, the current date is diplayed in the jumbotron
let showDate = function() {

    //Create a variable for the current date to be displayed
    let today = moment().format("dddd, MMMM Do YYYY");

    // Insert text into element
    currentDay.textContent = today;
};

//Create a function that checks the current time against the timeblock time to determine the background color
let timeblockColor = function () {
    //Get current time
    let currentHour = moment().hour();
    console.log(currentHour);
    
    console.log(timeblock);

    for (let i = 0; i < timeblock.length; i++) {
        // console.log(timeblock[i].dataset.hour);
        
        if (timeblock[i].dataset.hour == currentHour) {
            console.log("this is the current time");
            timeblock[i].classList.add("present");
        }
        else if (timeblock[i].dataset.hour > currentHour) {
            console.log("this is in the future");
            timeblock[i].classList.add("future");
        }
        else if (timeblock[i].dataset.hour < currentHour) {
            console.log("this is in the past");
            timeblock[i].classList.add("past");
        };

    };

    //Compare current hour to the timeblock hour
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    //     if("data-hour") {

    //     }
    // }
};

// Function Calls
showDate();
timeblockColor();



