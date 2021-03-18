// Get current day 
var now = moment().format('dddd, MMMM Do');
console.log(now);

// display current day in header
var $currentDay = $('#currentDay');
$currentDay.text(now);


