// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// // in the html.

var today = moment().format('MMM DD YYYY');
$('#currentDay').html(today);

function timeTracker() {

  var realTime =  moment().hour();

  $('.time-block').each(function () {
    console.log(realTime)

    var blockHour = parseInt($(this).attr('id').split('hour-')[1]);
    if (blockHour === realTime) {
      $(this).removeClass('past,future').addClass('present');
    } else if (blockHour < realTime) {
      $(this).removeClass('future,present').addClass('past');
    } else {
      $(this).removeClass('past,present').addClass('future');
    }
  });
}

 $(function () {
  $('.saveBtn').on('click', function () {

    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
    // // document.getElementById('update').textContent = 'Saved to localStorage';


    // $('.notification').addClass('show');

    // setTimeout(function () {
    //   $('notification').removeClass('show');
    // })

   })
  timeTracker();

  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  $('#hour18 .description').val(localStorage.getItem('hour18'));


});