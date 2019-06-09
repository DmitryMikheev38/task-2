

window.onload = function () {
  
  var arrival = document.getElementById('arrival');
  var exit = document.getElementById('exit');
  var calendar = document.querySelector('.calendar');
  var datepicker = document.querySelector('.datepicker');
  var dateArrival = document.getElementById('arrival');
  var dateExit = document.getElementById('exit');
  var cells = document.querySelector('.datepicker--cells');

  console.log('datepicer:' + datepicker);
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
    event.cancelBubble = true;    
  }

  cells.onclick = event => {
    var year = event.target.getAttribute('data-year');
    var date = event.target.getAttribute('data-date');
    var month = event.target.getAttribute('data-month');
    if ((date || month) === null) {
      return
    } else if (month.length < 2) {
      month = '0' + month;
    } 
    if (date.length < 2) {
      date = '0' + date;
    }
    var fullDate = date + '.' + month + '.' + year;
    dateArrival.setAttribute('value', fullDate);
  }

  var calendaButton = document.createElement('button');
  calendaButton.innerHTML = "подобрать номер"
  datepicker.appendChild(calendaButton)
  calendaButton.classList.add("gradient--button")
}



