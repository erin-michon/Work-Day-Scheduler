/*

ACCEPTANCE CRITERIA
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
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

//On page load, the current date is diplayed in the jumbotron
let showDate = function() {

    //Create a variable for the current date to be displayed
    let today = moment().format("dddd, MMMM Do YYYY");

    // Insert text into element
    currentDay.textContent = today;
};

// Function Calls
showDate();



