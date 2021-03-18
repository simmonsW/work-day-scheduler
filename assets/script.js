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

  // create rows
  var $row = $('<div>');
  $row.addClass('row');

  // create timeCol
  var $timeCol = $('<div>');
  $timeCol.addClass('col-2');

  // create timeBlocks
  var $hour = $('<div>');
  $hour.addClass('hour col-1 d-flex justify-content-end align-items-center');
  var $timeBlock = $('<div>');
  $timeBlock.addClass('timeBlock text-center');
  $timeBlock.text(showHour + ampm);

  // append
  $row.append($hour);
  $hour.append($timeBlock);

  // create description
  var $description = $('<div>');
  $description.addClass('description past col-10');

  // create textarea
  var $textarea = $('textarea');

  // append
  $row.append($description);
  $description.append($textarea);

  // create saveBtn
  var $saveBtn = $('<div>');
  var $saveSpan = $('<span>');
  $saveSpan.text('Save');

  $saveBtn.addClass('saveBtn col-1 text-center d-flex justify-content-center align-items-center');
  

  // append
  $row.append($saveBtn);
  $saveBtn.append($saveSpan);

  // append row to container
  $container.append($row);
  
  console.log(showHour, ampm);
  console.log(i);
}

