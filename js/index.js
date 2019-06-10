

window.onload = function () {
  $('#111').datepicker({
    range: true,
    toggleSelected: false,
    offset: 0 + 'px'
  });
  var d =  $('#111').data('datepicker');

  var arrival = document.getElementById('arrival');
  var exit = document.getElementById('exit');
  var calendar = document.querySelector('.calendar');
  var datepicker = document.querySelector('.datepicker');
  var dateArrival = document.getElementById('arrival');
  var dateExit = document.getElementById('exit');
  var cells = document.querySelector('.datepicker--cells');
  
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
    var minDate = pad(minRange.getDate()) + '.' + pad(minRange.getMonth()) + '.' + minRange.getFullYear();
    var maxDate = '';
    if (maxRange !== '') {
      maxDate = pad(maxRange.getDate()) + '.' + pad(maxRange.getMonth()) + '.' + maxRange.getFullYear();
    }
    dateArrival.setAttribute('value', minDate);
    dateExit.setAttribute('value', maxDate)

    event.cancelBubble = true;    
  }
  

  var calendaButton = document.createElement('button');
  calendaButton.innerHTML = "подобрать номер"
  datepicker.appendChild(calendaButton)
  calendaButton.classList.add("gradient--button");
}



