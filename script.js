/**
 * Current day
 * current time
 * [current events]
 *  time of event
 *  text of event
 * array of time blocks
 *  time object
 *  is open = true; 
 * current event text value
 * 
 * when page loads:
 * render a title
 * render some text
 * render current time and date
 * line break - horizontal
 * render planner
 * 
 * render planner:
 * render column
 *  inside column render row for every hour from 9am to 5pm
 * 
 * render row:
 * is there an event for each row?
 * is row past, present or future
 * css attached to row
 * is row available or open - button
 * 
 * when user clicks on row:
 * disable user input for previous row
 * enable user input for that row
 * 
 * when user clicks save button:
 * save value of row into local storage
 * disable the user input
 * 
 * when user provides input:
 * store as var
 */

var userInput = $(".text-box").val();

console.log(userInput); 

 $(".saveBtn").on("click", function(event) {
     event.preventDefault();
     console.log(userInput); 

 });
