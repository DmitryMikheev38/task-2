

window.onload = function () {
  
  $('.calendar').datepicker({
    range: true,
    toggleSelected: false,
    offset: 0 + 'px'
  });

  var d =  $('.calendar').data('datepicker');

  let selectDate = document.querySelector('.selection-room__input-wrapper');
  let calendar = document.querySelector('.calendar');
  let datepicker = document.querySelector('.datepicker');
  let sliderLp = document.querySelector('.lp');
  let sliderRp = document.querySelector('.rp');
  let minPrise = document.querySelector('.min-prise');
  let maxPrise = document.querySelector('.max-prise');
  let selectRoom = document.querySelector('.selection-room');
  

  let block = false;

  document.onclick = function () {
    calendar.style.display = 'none';
    block = false;
    }

  let inputSelectDate = selectDate.children[1];
  inputSelectDate.onclick = (e) => {
    if (!block) {
      calendar.style.display = 'block';
      block = true;
    } else if (block) {
      calendar.style.display = 'none';
      block = false;
    }  
    e.cancelBubble = true;
  }

  var calendarButtonClear = document.createElement('button');
  var calendarButtonApply = document.createElement('button');
  calendarButtonClear.innerHTML = "очистить";
  calendarButtonApply.innerHTML = "применить";
  datepicker.appendChild(calendarButtonClear);
  datepicker.appendChild(calendarButtonApply);
  calendarButtonClear.classList = "button-empty calendar__button-empty--clear";
  calendarButtonApply.classList = "button-empty calendar__button-empty--apply";


  minPrise.innerHTML = sliderLp.children[0].innerHTML + " 000";
  maxPrise.innerHTML = sliderRp.children[0].innerHTML + " 000";

  sliderLp.onmousedown = () => {
    selectRoom.onmousemove = () => {
      let minValue = sliderLp.children[0].innerHTML + " 000";
      let maxvalue = sliderRp.children[0].innerHTML + " 000";
      minPrise.innerHTML = minValue;
      maxPrise.innerHTML = maxvalue;
    }
    
  }

  sliderRp.onmousedown = () => {
    selectRoom.onmousemove = () => {
      let minValue = sliderLp.children[0].innerHTML + " 000";
      let maxvalue = sliderRp.children[0].innerHTML + " 000";
      minPrise.innerHTML = minValue;
      maxPrise.innerHTML = maxvalue;
    }
    
  }

}

