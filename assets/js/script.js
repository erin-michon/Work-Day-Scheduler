// ** PAGE VARIABLES **
// Define any variables and html elements that need to be pulled/manipulated
const currentDay = document.querySelector("#currentDay");
const timeblock = document.querySelectorAll("[data-hour]");
const saveBtn = document.querySelectorAll("#saveBtn");

let mySchedule = [
    {
        scheduleblock: "block8",
        text: ""
        
    },
    {
        scheduleblock: "block9",
        text: ""

    },
    {
        scheduleblock: "block10",
        text: ""
        
    },
    {
        scheduleblock: "block11",
        text: ""
        
    },
    {
        scheduleblock: "block12",
        text: ""
        
    },
    {
        scheduleblock: "block13",
        text: ""
        
    },
    {
        scheduleblock: "block14",
        text: ""
        
    },
    {
        scheduleblock: "block15",
        text: ""
        
    },
    {
        scheduleblock: "block16",
        text: ""
        
    },
    {
        scheduleblock: "block17",
        text: ""
        
    }
];

// ** SHOW DATE **
//On page load, the current date is diplayed in the jumbotron
let showDate = function() {

    //Create a variable for the current date to be displayed
    let today = moment().format("dddd, MMMM Do YYYY");

    // Insert text into element
    currentDay.textContent = today;
};

// ** COLOR TIME BLOCKS **
//Create a function that checks the current time against the timeblock time to determine the background color
let timeblockColor = function () {
    //Get current time
    let currentHour = moment().hour();

    // iterate through each of these elements, comparing the time
    for (let i = 0; i < timeblock.length; i++) {
        
        // Based on the current time, the time block is color-coded to indicate whether it is in the past, present, or future
        if (timeblock[i].dataset.hour == currentHour) {
            timeblock[i].classList.add("present");
        }
        else if (timeblock[i].dataset.hour > currentHour) {
            timeblock[i].classList.add("future");
        }
        else if (timeblock[i].dataset.hour < currentHour) {
            timeblock[i].classList.add("past");
        };
    };
};

// ** EDIT FUNCTION ** 
// Save's the newly edited information into local.Storage - this is triggered by the save button event listener
let Edit = function(event) {

    //Get the text content of the correlating .description div
    let descriptionEl = $(event.target.previousElementSibling);

    //get the class description from the div that is also in the mySchedule array
    let scheduleBlockAr = descriptionEl[0].className.split(" ");
    scheduleBlockHour = scheduleBlockAr[1];

    console.log(scheduleBlockHour);
    
    //iterate through the mySchedule Array and attach innerText to correlating object
    for (let i = 0; i < mySchedule.length; i++) {
    
        if (mySchedule[i].scheduleblock === scheduleBlockHour) {

             mySchedule[i].text = descriptionEl[0].innerText;
            console.log(mySchedule[i].text);
        };
    }

    //Call function to save edits to local.Storage
    saveSchedule();

};

// ** SAVE FUNCTION ** 
// Saves the newly edited text to local.Storage
var saveSchedule = function() { 
    localStorage.setItem("mySchedule", JSON.stringify(mySchedule));
};

// ** LOAD STORAGE FUNCTION ** 
// Loads the previously saved edits when the browser is refreshed
var loadSchedule = function() {
    //get data from localStorage
    mySchedule = localStorage.getItem("mySchedule", mySchedule);

    //check to see if anyting exists:
    if (!mySchedule) {
        return false;
      }
    
    //turn it back into an object
    mySchedule = JSON.parse(mySchedule);

    //iterate through the mySchedule Array and attach innerText to correlating object
    for (let i = 0; i < mySchedule.length; i++) {
           
        if (mySchedule[i].scheduleblock = $(timeblock)[i].classList[1]) {

            $(timeblock)[i].textContent = mySchedule[i].text;
        };
    }
     
};    

// ** EVENT LISTENERS **
// Add Event Listener for Save Buttons
saveBtn.forEach(item => {
    item.addEventListener('click', Edit)
});


// ** FUNCTION CALLS **
showDate();
timeblockColor();
loadSchedule();







