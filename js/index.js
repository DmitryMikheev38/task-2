

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
  var inputGuests = document.querySelector('.guests .select');
  var addGuests = document.querySelector('.amount-guest ul')
  var sumGuests = document.querySelector('.guests .input');
  console.log('ddd' + sumGuests.getAttribute('value'));
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

  inputGuests.onclick = () => {
    var guests = document.querySelector('.guests');
    var attributeStyle = guests.getAttribute('style');
    if (attributeStyle !== "height: 203px;") {
      guests.style.height = "203px";
    } else {
      guests.style.height = "44px";
    }
    
    
  }

  addGuests.onclick = e => {
     if(e.target.tagName !== 'BUTTON') return;

    // console.log('button active' + e.target)
    // for (var key in e.target) {
    //   console.log('key: ' + key + ' ||| value: ' + e.target[key])
    // }
    if (e.target.className === 'max' && Number(e.target.parentNode.children[1].innerHTML) >= 0) {
      var spanValue = Number(e.target.parentNode.children[1].innerHTML) + 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
      sumGuests.setAttribute('value', spanValue)
     // if ()
      // console.log(' ||| value: ' + e.target.parentNode.children[1].innerHTML);
      // console.log('ddd' + spanValue)
    } else if (e.target.className === 'min' && Number(e.target.parentNode.children[1].innerHTML) > 0) {
      var spanValue = Number(e.target.parentNode.children[1].innerHTML) - 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
    }
    sumGuests
    
  }

}



