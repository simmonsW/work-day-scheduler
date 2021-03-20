var $container = $('.container');

// Get current day 
var now = moment().format('dddd, MMMM Do');
console.log(now);

// display current day in header
var $currentDay = $('#currentDay');
$currentDay.text(now);

// hourly planner build
for (var i = 0; i <= 8; i++) {
  // hour stores as 24H
  var hour = i + 9;

  // showHour displays as 12H
  var showHour = 0;
  var ampm = '';
  if (hour > 12) {
    showHour = hour - 12;
    ampm = 'pm';
  } else {
    showHour = hour;
    ampm = 'am';
  }

  console.log(hour, showHour);

  // create row and append to container
  var $row = $('<div>')
    .addClass('row')
    .appendTo($container);

  // create timeBlocks
  var $hour = $('<div>')
    .addClass('hour col-1 d-flex justify-content-end align-items-center')
    .appendTo($row);
  var $timeBlock = $('<div>')
    .addClass('timeBlock text-center')
    .text(showHour + ampm)
    .appendTo($hour);

  // create description and append to row
  var $description = $('<textarea>')
    .addClass('description past col-10')
    .appendTo($row);

  // create saveBtn and append to row
  var $saveBtn = $('<div>')
    .text('Save')
    .addClass('saveBtn col-1 text-center d-flex justify-content-center align-items-center')
    .appendTo($row);
  
  // update row color based on hour
  rowColor($description, hour);
}

// set row color based on hour
function rowColor($description, hour) {
  // get current hour in 24H
  var now24 = moment().format('H');
  console.log(now24);

  if (hour < now24) {
    $description.addClass('past');
    console.log('before');
  } else if (hour > now24) {
    $description.addClass('future');
    console.log('after');
  } else {
    $description.addClass('present');
    console.log('now');
  }
}