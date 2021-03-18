var $container = $('.container');

// Get current day 
var now = moment().format('dddd, MMMM Do');
console.log(now);

// display current day in header
var $currentDay = $('#currentDay');
$currentDay.text(now);

// hourly planner build
for (var i = 0; i <= 8; i++) {
  var hour = i + 9;

  var showHour = 0;
  var ampm = '';
  if (hour > 12) {
    showHour = hour - 12;
    ampm = 'pm';
  } else {
    showHour = hour;
    ampm = 'am';
  }

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
  var $description = $('<div>')
    .addClass('description past col-10')
    .appendTo($row);

  // create textarea and append
  var $textarea = $('textarea')
    .appendTo($description);

  // create saveBtn and append to row
  var $saveBtn = $('<div>')
    .text('Save')
    .addClass('saveBtn col-1 text-center d-flex justify-content-center align-items-center')
    .appendTo($row);
}

