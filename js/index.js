

window.onload = function () {
  $('.calendar').datepicker({
    range: true,
    toggleSelected: false,
    offset: 0 + 'px'
  });
  var d =  $('.calendar').data('datepicker');

  var arrival = document.getElementById('arrival');
  var exit = document.getElementById('exit');
  var calendar = document.querySelector('.calendar');
  var datepicker = document.querySelector('.datepicker');
  var dateArrival = document.getElementById('arrival');
  var dateExit = document.getElementById('exit');
  var cells = document.querySelector('.datepicker--cells');
  var i = document.querySelector('.datepicker--nav-title i');

  console.log(i.tagName)
  i.style.cssText = "font-family: 'Quicksand', sans-serif; font-size: 19px; font-weight: bold"
  
  function pad(n) {
    if (n < 10)
        return "0" + n;
    return n;
}

  arrival.onclick = function (event) {
    calendar.style.display = 'block';
    event.cancelBubble = true;
  };
  exit.onclick = event => {
    calendar.style.display = 'block';
    event.cancelBubble = true;
  };
  document.onclick = function () {
    calendar.style.display = 'none';
    }

  datepicker.onclick = event => {
    minRange = d.minRange || d._focused;
    maxRange = d.maxRange;
    var minDate;
    var maxDate;
    console.log(minRange)
    if (minRange) {
      minDate = pad(minRange.getDate()) + '.' + pad(minRange.getMonth()) + '.' + minRange.getFullYear();
    } else {
      minDate = '';
    
    }
    if (maxRange) {
      maxDate = pad(maxRange.getDate()) + '.' + pad(maxRange.getMonth()) + '.' + maxRange.getFullYear();
    } else {
      maxDate = '';
    }
    dateArrival.setAttribute('value', minDate);
    dateExit.setAttribute('value', maxDate);

    event.cancelBubble = true;    
  }
  

  var calendarButtonClear = document.createElement('a');
  var calendarButtonApply = document.createElement('a');
  calendarButtonClear.innerHTML = "очистить";
  calendarButtonApply.innerHTML = "применить";
  datepicker.appendChild(calendarButtonClear);
  datepicker.appendChild(calendarButtonApply);
  calendarButtonClear.className = "montserrat12 uppercase link weight-bold button-datepicker-clear";
  calendarButtonApply.classList = "montserrat12 uppercase link weight-bold button-datepicker-apply"
}



