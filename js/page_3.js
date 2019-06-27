/* -------------------------------------- begin View ---------------------------------------------- */

var view = {

  showCalendar (block) {
    var calendar = document.querySelector('.calendar');
    if (block) {
      calendar.style.display = 'block';
    } else {
      calendar.style.display = 'none';
    }
  },
  
  rotateButton(block, ...btn) {
    if (block) {
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.transform = 'rotate(180deg)';
      }
    } else {
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.transform = 'rotate(0deg)';
      }
    }
  },

  showDate(minDate, maxDate) {
    arrival = document.querySelector('.reservation__input-wrapper--arrival').childNodes[0];
    exit = document.querySelector('.reservation__input-wrapper--exit').childNodes[0];
    arrival.setAttribute('value', minDate);
    exit.setAttribute('value', maxDate);
  },

  openSelect(block) {
    var select = document.querySelector('.drop-down');
    if (block) {
      select.style.height = "203px";
      select.style.borderColor="rgba(31, 32, 65, 0.5)";
      select.style.boxShadow = "0px 10px 20px rgba(31, 32, 65, 0.05)";    
    } else {
      select.removeAttribute('style');
    }
  },


  showGuests(valueGuests) {
    var value = valueGuests;
    if (value === undefined || value === NaN) return
    let sumGuests = document.querySelector('.drop-down').childNodes[0];
    sumGuests.setAttribute('value', value);
  },

  showButtomClear(block) {
    var dropDownClear = document.querySelector('.drop-down__list__button-empty--clear');
    if (block) {
      dropDownClear.style.display = 'block';
    } else {
      dropDownClear.style.display = 'none';
    }
  },
  
  showFocus () {
    var emailInput = document.querySelector('.subscription__input-wrapper .input-wrapper__input');
    emailInput.parentNode.style.borderColor = "rgba(31, 32, 65, 0.5)";
  },

  delleteFocus () {
    var emailInput = document.querySelector('.subscription__input-wrapper .input-wrapper__input');
    emailInput.parentNode.removeAttribute('style');
  }

}

/* --------------------------------------- end Veiw ----------------------------------------------- */





/* ------------------------------------- begin Model ---------------------------------------------- */

var model = {
  block: false,

  pad(n) {
    if (n < 10)
        return "0" + n;
    return n;
  },

  calculateCalendar() {
    if (!this.block) {
      this.block = true;
      return this.block;
    } else if (this.block) {
      this.block = false;
      return this.block;
    }  
  },

  calculateDate(d) {
    minRange = d.minRange || d._focused;
    maxRange = d.maxRange;
    var minDate;
    var maxDate;
    if (minRange) {
      minDate = this.pad(minRange.getDate()) + '.' + this.pad(minRange.getMonth()) + '.' + minRange.getFullYear();
    } else {
      minDate = '';
    }
    if (maxRange) {
      maxDate = this.pad(maxRange.getDate()) + '.' + this.pad(maxRange.getMonth()) + '.' + maxRange.getFullYear();
    } else {
      maxDate = '';
    }
    return {minDate, maxDate};
  },

  calculateSelect(select) {
    if (select.getAttribute('style') === null) {
      return true
    } else if (select.style.height === "203px"){
      return false
    }
  },

  computedGuests (e, sumGuests) {
    if((e.target.parentNode.className === "subhead drop-down__list__cells drop-down__list__cells--baby") || (e.target.tagName !== 'BUTTON') ) return;
      let baby = sumGuests.getAttribute('value').split(',')[1];
      let adult = sumGuests.getAttribute('value').split(',')[0];
      let val = adult.split(' ')[0]
      let attr = Number(val);

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
      var valueGuests = adult + sign + comma + baby;
      return valueGuests
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
      if (attr === 0 && baby === '') {
        var valueGuests = ''
        return valueGuests
      };
      var valueGuests = attr + sign + comma + baby;
      return valueGuests 
    }
  },

  computedBaby (e, sumGuests) {
    if (e.target.tagName !== 'BUTTON') return;
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
      var guestsValue = adult + comm + spanValue + sign;
      return guestsValue;
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

      if (spanValue == 0 && adult == '0 гостей') {
        var guestsValue = '';
        return guestsValue
      };

      var guestsValue = adult + comm + spanValue + sign;
      return guestsValue;
    }
  },
  
  computedClearButton(value) {
    var sumGuests = value;
    if (sumGuests.getAttribute('value') !== '') {
      return true
      } else {
      return false
      }
  }

}

/* -------------------------------------- and Model ----------------------------------------------- */





/* ---------------------------------- begin Controller -------------------------------------------- */

var controller = {
  showCalendarClick() {
    var buttonArrival = document.querySelector('.reservation__input-wrapper--arrival').childNodes[1];
    var buttonExit = document.querySelector('.reservation__input-wrapper--exit').childNodes[1];
    var calendar = model.calculateCalendar();
    view.showCalendar(calendar);
    view.rotateButton(calendar, buttonArrival, buttonExit)
  },

  showDateClick() {
    var d =  $('.calendar').data('datepicker');
    var date = model.calculateDate(d);
    view.showDate(date.minDate, date.maxDate);
  },

  openSelectClick() {
    var select = document.querySelector('.drop-down');
    var selectButton = select.childNodes[1];
    var selectGuest = model.calculateSelect(select);
    view.openSelect(selectGuest);
    view.rotateButton(selectGuest, selectButton)
  },

  addGuestsClick(e) {
    var sumGuests = document.querySelector('.drop-down').childNodes[0];
    view.showGuests(model.computedGuests(e, sumGuests));
    view.showButtomClear(model.computedClearButton(sumGuests));
  },

  addBabyClick(e) {
    var sumGuests = document.querySelector('.drop-down').childNodes[0];
    view.showGuests(model.computedBaby(e, sumGuests));
    view.showButtomClear(model.computedClearButton(sumGuests));
  },

  inputFocus() {
    view.showFocus ();
  },

  outputFocus () {
    view.delleteFocus ();
  }
}

/* ----------------------------------- and Controller --------------------------------------------- */





/* ------------------------- anonimus initialize function ---------------------------------------- */

;( function() {

    var app = {
      init() {
        this.main();
        this.event();
      },

      main() {
        $('.calendar').datepicker({
          range: true,
          toggleSelected: false,
          offset: 0 + 'px'
        });

        var datepicker = document.querySelector('.datepicker');
        var calendarButtonClear = document.createElement('button');
        var calendarButtonApply = document.createElement('button');
        calendarButtonClear.innerHTML = "очистить";
        calendarButtonApply.innerHTML = "применить";
        datepicker.appendChild(calendarButtonClear);
        datepicker.appendChild(calendarButtonApply);
        calendarButtonClear.classList = "button-empty calendar__button-empty--clear";
        calendarButtonApply.classList = "button-empty calendar__button-empty--apply"
      },

      event() {
        var arrival = document.querySelector('.reservation__input-wrapper--arrival').childNodes[1];
        var exit = document.querySelector('.reservation__input-wrapper--exit').childNodes[1];
        var datepicker = document.querySelector('.datepicker');
        var dropDownButton = document.querySelector('.drop-down').childNodes[1];
        var addGuests = document.querySelector('.drop-down__list__ul');
        var babyCell = document.querySelector('.drop-down__list__cells--baby');
        var emailInput = document.querySelector('.subscription__input-wrapper .input-wrapper__input');
        var like = document.querySelectorAll('.reviews__like');
        
        arrival.onclick = controller.showCalendarClick;
        exit.onclick = controller.showCalendarClick;
        datepicker.onclick = controller.showDateClick;
        dropDownButton.onclick = controller.openSelectClick;
        addGuests.onclick = controller.addGuestsClick;
        babyCell.onclick = controller.addBabyClick;
        emailInput.onfocus = controller.inputFocus;
        emailInput.onblur = controller.outputFocus;
      }
    }

    app.init();

}());


/* ------------------------- anonimus initialize function ---------------------------------------- */