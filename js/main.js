

window.onload = function () {
  $('.calendar').datepicker({
    range: true,
    toggleSelected: false,
    offset: 0 + 'px'
  });
  var d =  $('.calendar').data('datepicker');

  var arrival = document.querySelector('.input-wrapper--arrival').childNodes[0];
  var exit = document.querySelector('.input-wrapper--exit').childNodes[0];
  var calendar = document.querySelector('.calendar');
  var datepicker = document.querySelector('.datepicker');
  var inputSelector = document.querySelector('.room-search__drop-down').childNodes[1];
  var addGuests = document.querySelector('.drop-down__list__ul')
  var sumGuests = document.querySelector('.room-search__drop-down .drop-down__input');
  var dropDownClear = document.querySelector('.drop-down__list__button-empty--clear');
  var subscriptionInput = document.querySelector('.subscription__input-wrapper .input-wrapper__input');
  
  function pad(n) {
    if (n < 10)
        return "0" + n;
    return n;
  }

  let block = false;
  arrivalButton = document.querySelector('.input-wrapper--arrival').childNodes[1];
  arrivalButton.onclick = function (event) {
    if (!block) {
      calendar.style.display = 'block';
      block = true;
    } else if (block) {
      calendar.style.display = 'none';
      block = false;
    }  
    event.cancelBubble = true;
  };


  exitButton = document.querySelector('.input-wrapper--exit').childNodes[1];
  exitButton.onclick = event => {
    if (!block) {
      calendar.style.display = 'block';
      block = true;
    } else if (block) {
      calendar.style.display = 'none';
      block = false;
    }  
    event.cancelBubble = true;
  };

  document.onclick = function () {
    calendar.style.display = 'none';
    block = false;
    }

  datepicker.onclick = event => {
    minRange = d.minRange || d._focused;
    maxRange = d.maxRange;
    var minDate;
    var maxDate;
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
    arrival.setAttribute('value', minDate);
    exit.setAttribute('value', maxDate);

    event.cancelBubble = true;    
  }
  

  var calendarButtonClear = document.createElement('button');
  var calendarButtonApply = document.createElement('button');
  calendarButtonClear.innerHTML = "очистить";
  calendarButtonApply.innerHTML = "применить";
  datepicker.appendChild(calendarButtonClear);
  datepicker.appendChild(calendarButtonApply);
  calendarButtonClear.classList = "button-empty calendar__button-empty--clear";
  calendarButtonApply.classList = "button-empty calendar__button-empty--apply"

  inputSelector.onclick = () => {
    var select = document.querySelector('.drop-down');
    var attributeStyle = select.getAttribute('style');
    if (attributeStyle === null) {
      select.style.height = "203px";
      select.style.borderColor="rgba(31, 32, 65, 0.5)";
      select.style.boxShadow = "0px 10px 20px rgba(31, 32, 65, 0.05)";    
    } else if (select.style.height === "203px"){
      select.removeAttribute('style');
    }
  }

  addGuests.onclick = e => {
    if((e.target.parentNode.className === "subhead drop-down__list__cells drop-down__list__cells--baby") || (e.target.tagName !== 'BUTTON') ) return;
      let baby = sumGuests.getAttribute('value').split(',')[1];
      let adult = sumGuests.getAttribute('value').split(',')[0];
      let val = adult.split(' ')[0]
      let attr = Number(val);
      console.log(adult);

    if (e.target.className === 'drop-down__list__button drop-down__list__button--max' && Number(e.target.parentNode.children[1].innerHTML) >= 0) {
      let spanValue = Number(e.target.parentNode.children[1].innerHTML) + 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
      attr++;
      let adult = attr;
      let lastNum = Number(attr.toString().slice(-1))
      let sign = ' гостей';
      if (attr > 10 && attr < 20) {
        sign = ' гостей';
      } else if (lastNum === 1) {
        sign = ' гость';
      } else if (lastNum > 1 && lastNum < 5) {
        sign = ' гостя';
      }
      let comma;
      if (baby === undefined) {
        comma = '';
        baby = '';
      } else {
        comma = ','
      }
      sumGuests.setAttribute('value', adult + sign + comma + baby);
    } else if (e.target.className === 'drop-down__list__button drop-down__list__button--min' && Number(e.target.parentNode.children[1].innerHTML) > 0) {
      let spanValue = Number(e.target.parentNode.children[1].innerHTML) - 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
      attr--;
      let lastNum = Number(attr.toString().slice(-1))
      let sign = ' гостей';
      if (attr !== 0 && attr > 10 && attr < 20) {
        sign = ' гостей';
      } else if (lastNum === 1) {
        sign = ' гость';
      } else if (lastNum > 1 && lastNum < 5) {
        sign = ' гостя';
      }
      let comma;
      if (baby === undefined) {
        baby = '';
        comma = '';
      } else {
        comma = ','
      }
      sumGuests.setAttribute('value', attr + sign + comma + baby);
      if (attr === 0 && baby === '') {
        sumGuests.setAttribute('value', '');
      };
    }
    if (sumGuests.getAttribute('value') !== '') {
      dropDownClear.style.display = "block";
    } else {
      dropDownClear.style.display = "none";
    }
    sumGuests
  }

  let babyCell = document.querySelector('.drop-down__list__cells--baby');
  babyCell.onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;
    let val = sumGuests.getAttribute('value');
    let attr = Number(val);
    let adult = sumGuests.getAttribute('value').split(',')[0];
    let comm = ', ';
    if (e.target.className === 'drop-down__list__button drop-down__list__button--max' && Number(e.target.parentNode.children[1].innerHTML) >= 0) {
      let spanValue = Number(e.target.parentNode.children[1].innerHTML) + 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
      let sign = ' младенцев';
      if (spanValue > 9 && spanValue < 21) {
        sign = ' младенцев'
      } else if (Number(spanValue.toString().slice(-1)) == 1 ) {
        sign = ' младенец'
      } else if (Number(spanValue.toString().slice(-1)) < 5 ) {
        sign = ' младенца'
      }
      if (adult == 0) {
        adult = '0 гостей';
      }
      sumGuests.setAttribute('value', adult + comm + spanValue + sign);
    } else if (e.target.className === 'drop-down__list__button drop-down__list__button--min' && Number(e.target.parentNode.children[1].innerHTML) > 0) {
      let spanValue = Number(e.target.parentNode.children[1].innerHTML) - 1;
      e.target.parentNode.children[1].innerHTML = spanValue;
      let sign = ' младенцев';
      if (spanValue > 9 && spanValue < 21) {
        sign = ' младенцев'
      } else if (spanValue == 0) {
        sign = '';
        spanValue = '';
        comm = '';
      } else if (Number(spanValue.toString().slice(-1)) == 1 ) {
        sign = ' младенец'
      } else if (Number(spanValue.toString().slice(-1)) < 5 ) {
        sign = ' младенца'
      }
      if (adult == 0) {
        adult = '0 гостей';
      }
      sumGuests.setAttribute('value', adult + comm + spanValue + sign);

      if (spanValue == 0 && adult == '0 гостей') {
        sumGuests.setAttribute('value', '');
      };
    }
    if (sumGuests.getAttribute('value') !== '' ) {
      dropDownClear.style.display = "block";
    } else {
      dropDownClear.style.display = "none";
    }
  }

  dropDownClear.onclick = () => {
    sumGuests.setAttribute('value', '');
    let dropDownSpan = document.querySelectorAll('.room-search__drop-down .drop-down__list__cells');
    for (let i = 0; i < dropDownSpan.length; i++) {
      dropDownSpan[i].children[1].innerHTML = 0;
    }
    dropDownClear.style.display = "none";
  }

  subscriptionInput.onfocus = () => {
    subscriptionInput.parentNode.style.borderColor = "rgba(31, 32, 65, 0.5)";
  }

  subscriptionInput.onblur = () => {
    subscriptionInput.parentNode.removeAttribute('style');
  }
}



