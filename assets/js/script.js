/*

ACCEPTANCE CRITERIA
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist 

*/

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

/* When the save button is clicked
Save the data to local.Storage */
let saveEdit = function(event) {

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

var saveSchedule = function() { 
    console.log("the save schedule function was called") 

    localStorage.setItem("mySchedule", JSON.stringify(mySchedule));
};

// Check localStorage upon page load

//get task items from localStorage
//convert tasks form string back to array of obj
//iterates through a tasks array and creates task elements on the page

var loadSchedule = function() {
    //get the local storage data
    mySchedule = localStorage.getItem("mySchedule", mySchedule);
    
    //turn it back into an object
    mySchedule = JSON.parse(mySchedule);

    console.log(mySchedule);
    console.log(mySchedule[0].text);
    console.log(mySchedule[0].scheduleblock);

    console.log($(timeblock[0]));
    console.log($(timeblock)[0].classList[1]);

    console.log(mySchedule[0].text);
    console.log($(timeblock)[0].textContent);
    
   

    //iterate through the mySchedule Array and attach innerText to correlating object
    for (let i = 0; i < mySchedule.length; i++) {
           
        if (mySchedule[i].scheduleblock = $(timeblock)[i].classList[1]) {

            console.log("this is my match!")

            $(timeblock)[i].textContent = mySchedule[i].text;

        } else {

            console.log("NO MATCH!")
        };
    }
     
};    


// Add Event Listener for Save Buttons
saveBtn.forEach(item => {
    item.addEventListener('click', saveEdit)
});




// ** FUNCTION CALLS **
showDate();
timeblockColor();
loadSchedule();







