
window.onload = function () {
  
  
  $('.calendar').datepicker({
    range: true,
    toggleSelected: false,
    offset: 0 + 'px'
  });

  let d =  $('.calendar').data('datepicker');

  let selectDate = document.querySelector('.selection-room__input-wrapper');
  let calendar = document.querySelector('.calendar');
  let datepicker = document.querySelector('.datepicker');
  let sliderLp = document.querySelector('.lp');
  let sliderRp = document.querySelector('.rp');
  let minPrise = document.querySelector('.min-prise');
  let maxPrise = document.querySelector('.max-prise');
  let selectRoom = document.querySelector('.selection-room');
  let dropDownGuests = document.querySelector('.selection-room__drop-down--guests');
  let guestsList = document.querySelector('.drop-down__list--guests');
  let sumGuests = document.querySelector('.selection-room__drop-down--guests .drop-down__input');
  let dropDownClear = document.querySelector('.drop-down__list__button-empty--clear');
  let subscriptionInput = document.querySelector('.subscription__input-wrapper .input-wrapper__input');
  let dropDownBed = document.querySelector('.selection-room__drop-down--bed');
  let cellBedRooms = document.querySelector('.drop-down__list__cells--bedrooms');
  let cellBeds = document.querySelector('.drop-down__list__cells--beds');
  let cellBathRooms = document.querySelector('.drop-down__list__cells--bathrooms');
  let comfortListButton = document.querySelector('.comfort-list__button-more');
  let comfortList = document.querySelector('.selection-room__comfort-list');


  rooms = [
    { images: 'url(/images/rooms/image1.jpg)',
      number: 888,
      lux: 'Люкс',
      prise: '9 990',
      stars: 5,
      reviews: 145,
    },
    {
      images: 'url(/images/rooms/image2.jpg)',
      number: 840,
      lux: '',
      prise: '9 900',
      stars: 4,
      reviews: 65,
    },
    {
      images: 'url(/images/rooms/image3.jpg)',
      number: 980,
      lux: 'Люкс',
      prise: '8 500',
      stars: 3,
      reviews: 35,
    },
    {
      images: 'url(/images/rooms/image4.jpg)',
      number: 856,
      lux: '',
      prise: '7 300',
      stars: 5,
      reviews: 19,
    },
    {
      images: 'url(/images/rooms/image5.jpg)',
      number: 740,
      lux: '',
      prise: '6 000',
      stars: 4,
      reviews: 44,
    },
    {
      images: 'url(/images/rooms/image6.jpg)',
      number: 982,
      lux: '',
      prise: '5 800',
      stars: 3,
      reviews: 56,
    },
    {
      images: 'url(/images/rooms/image7.jpg)',
      number: 678,
      lux: '',
      prise: '5 500',
      stars: 5,
      reviews: 45,
    },
    {
      images: 'url(/images/rooms/image8.jpg)',
      number: 450,
      lux: '',
      prise: '5 300',
      stars: 4,
      reviews: 39,
    },
    {
      images: 'url(/images/rooms/image9.jpg)',
      number: 350,
      lux: '',
      prise: '5 000',
      stars: 3,
      reviews: 77,
    },
    {
      images: 'url(/images/rooms/image10.jpg)',
      number: 666,
      lux: '',
      prise: '5 000',
      stars: 5,
      reviews: 25,
    },
    {
      images: 'url(/images/rooms/image11.jpg)',
      number: 444,
      lux: '',
      prise: '5 000',
      stars: 3,
      reviews: 15,
    },
    {
      images: 'url(/images/rooms/image12.jpg)',
      number: 352,
      lux: '',
      prise: '5 000',
      stars: 3,
      reviews: 55,
    },
  ]
  


  let block = false;

  let inputSelectDate = selectDate.children[1];
  inputSelectDate.onclick = (e) => {
    if (!block) {
      calendar.style.display = 'block';
      inputSelectDate.style.transform = 'rotate(180deg)';
      block = true;
    } else if (block) {
      calendar.style.display = 'none';
      inputSelectDate.style.transform = 'rotate(0deg)';
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

  calendarButtonApply.onclick = () => {
    calendar.style.display = 'none';
    inputSelectDate.style.transform = 'rotate(0deg)';
    block = false;
  }

  calendarButtonClear.onclick = (event) => {
    selectDate.children[0].removeAttribute('value');
    event.cancelBubble = true;  
  }

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

  datepicker.onclick = event => {
    let month = ['янв', 'фев', 'марта', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'нбр', 'дек']
    let minRange = d.minRange || d._focused;
    let maxRange = d.maxRange;
    let minDate = '';
    let maxDate = '';
    if (minRange) {
      minDate = minRange.getDate() + ' ' + month[minRange.getMonth()];
    } else {
      minDate = '';
    }
    if (maxRange) {
      maxDate = ' - ' + maxRange.getDate() + ' ' + month[maxRange.getMonth()];
    } else {
      maxDate = '';
    }
    
    selectDate.children[0].setAttribute('value', minDate + maxDate)

    event.cancelBubble = true;    
  }

  let buttonGuests = dropDownGuests.children[1];
  buttonGuests.onclick = () => {
    let select = dropDownGuests;
    let attributeStyle = select.getAttribute('style');
    if (attributeStyle === null) {
      buttonGuests.style.transform = 'rotate(180deg)';
      select.style.height = "203px";
      select.style.borderColor="rgba(31, 32, 65, 0.5)";
      select.style.boxShadow = "0px 10px 20px rgba(31, 32, 65, 0.05)";    
    } else if (select.style.height === "203px"){
      buttonGuests.style.transform = 'rotate(0deg)';
      select.removeAttribute('style');
    }
  }

  guestsList.onclick = e => {
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
    let dropDownSpan = document.querySelectorAll('.selection-room__drop-down--guests .drop-down__list__number');
    for (let i = 0; i < dropDownSpan.length; i++) {
      dropDownSpan[i].innerHTML = 0;
    }
    dropDownClear.style.display = "none";
  }

  subscriptionInput.onfocus = () => {
    subscriptionInput.parentNode.style.borderColor = "rgba(31, 32, 65, 0.5)";
  }

  subscriptionInput.onblur = () => {
    subscriptionInput.parentNode.removeAttribute('style');
  }


  let buttonBed = dropDownBed.children[1];
  buttonBed.onclick = () => {
    let select = dropDownBed;
    let attributeStyle = select.getAttribute('style');
    if (attributeStyle === null) {
      buttonBed.style.transform = 'rotate(180deg)';
      select.style.height = "163px";
      select.style.borderColor="rgba(31, 32, 65, 0.5)";
      select.style.boxShadow = "0px 10px 20px rgba(31, 32, 65, 0.05)";    
    } else if (select.style.height === "163px"){
      buttonBed.style.transform = 'rotate(0deg)';
      select.removeAttribute('style');
    }
  }

  cellBedRooms.onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;

    let roomsValue = dropDownBed.children[0].value;
    let rooms = dropDownBed.children[0];
    let bedRoomsVAlue = roomsValue.split(',')[0];
    let bedsValue = roomsValue.split(',')[1];
    let bathRomsValue = roomsValue.split(',')[2];

    if (e.target.className === 'drop-down__list__button drop-down__list__button--max' && Number(e.target.parentNode.children[1].innerHTML) < 10) {
      let spanValue = Number(cellBedRooms.children[1].innerHTML) + 1;
      cellBedRooms.children[1].innerHTML = spanValue;
      
      let newRoomsValue = spanValue + ' спальня,';

      if (spanValue === 1) {
        newRoomsValue = spanValue + ' спальня,';
      } else if (spanValue < 5) {
        newRoomsValue = spanValue + ' спальни,';
      } else {
        newRoomsValue = spanValue + ' спален,';
      }

      rooms.setAttribute('value', newRoomsValue + bedsValue + ',' + bathRomsValue );
    } else if (e.target.className === 'drop-down__list__button drop-down__list__button--min' && Number(e.target.parentNode.children[1].innerHTML) > 1) {
      let spanValue = Number(cellBedRooms.children[1].innerHTML) - 1;
      cellBedRooms.children[1].innerHTML = spanValue;
      let newRoomsValue = spanValue + ' спальня,';

      if (spanValue === 1) {
        newRoomsValue = spanValue + ' спальня,';
      } else if (spanValue < 5) {
        newRoomsValue = spanValue + ' спальни,';
      } else {
        newRoomsValue = spanValue + ' спален,';
      }

      rooms.setAttribute('value', newRoomsValue + bedsValue + ',' + bathRomsValue );
    }
  }

  cellBeds.onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;

    let roomsValue = dropDownBed.children[0].value;
    let rooms = dropDownBed.children[0];
    let bedRoomsValue = roomsValue.split(',')[0];
    let bedsValue = roomsValue.split(',')[1];
    let bathRomsValue = roomsValue.split(',')[2];

    if (e.target.className === 'drop-down__list__button drop-down__list__button--max' && Number(e.target.parentNode.children[1].innerHTML) < 10) {
      let spanValue = Number(cellBeds.children[1].innerHTML) + 1;
      cellBeds.children[1].innerHTML = spanValue;
      
      let newBedsValue = spanValue + ' кровать,';

      if (spanValue === 1) {
        newBedsValue = spanValue + ' кровать,';
      } else if (spanValue < 5) {
        newBedsValue = spanValue + ' кровати,';
      } else {
        newBedsValue = spanValue + ' кроватен,';
      }

      rooms.setAttribute('value', bedRoomsValue + ', ' + newBedsValue + bathRomsValue );
    } else if (e.target.className === 'drop-down__list__button drop-down__list__button--min' && Number(e.target.parentNode.children[1].innerHTML) > 1) {
      let spanValue = Number(cellBeds.children[1].innerHTML) - 1;
      cellBeds.children[1].innerHTML = spanValue;
      let newBedsValue = spanValue + ' кровать, ';

      if (spanValue === 1) {
        newBedsValue = spanValue + ' кровать,';
      } else if (spanValue < 5) {
        newBedsValue = spanValue + ' кровати,';
      } else {
        newBedsValue = spanValue + ' кроватен,';
      }

      rooms.setAttribute('value', bedRoomsValue + ', ' + newBedsValue + bathRomsValue );
    }
  }

  cellBathRooms.onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;

    let roomsValue = dropDownBed.children[0].value;
    let rooms = dropDownBed.children[0];
    let bedRoomsValue = roomsValue.split(',')[0];
    let bedsValue = roomsValue.split(',')[1];
    let bathRomsValue = roomsValue.split(',')[2];

    if (e.target.className === 'drop-down__list__button drop-down__list__button--max' && Number(e.target.parentNode.children[1].innerHTML) < 10) {
      let spanValue = Number(cellBathRooms.children[1].innerHTML) + 1;
      cellBathRooms.children[1].innerHTML = spanValue;
      
      let newBathValue = spanValue + ' ванная';

      if (spanValue === 1) {
        newBathValue = spanValue + ' ванных';
      } else if (spanValue < 5) {
        newBathValue = spanValue + ' ванных';
      } else {
        newBathValue = spanValue + ' ванных';
      }

      rooms.setAttribute('value', bedRoomsValue + ',' + bedsValue + ', ' + newBathValue );
    } else if (e.target.className === 'drop-down__list__button drop-down__list__button--min' && Number(e.target.parentNode.children[1].innerHTML) > 1) {
      let spanValue = Number(cellBathRooms.children[1].innerHTML) - 1;
      cellBathRooms.children[1].innerHTML = spanValue;
      
      let newBathValue = spanValue + ' ванная';

      if (spanValue === 1) {
        newBathValue = spanValue + ' ванных';
      } else if (spanValue < 5) {
        newBathValue = spanValue + ' ванных';
      } else {
        newBathValue = spanValue + ' ванных';
      }

      rooms.setAttribute('value', bedRoomsValue + ',' + bedsValue + ', ' + newBathValue );
    }
  }

  comfortListButton.onclick = () => {
    if (comfortList.getAttribute('style') === 'height: 250px;') {
      comfortList.style.height = '30px';
      comfortListButton.style.transform = 'rotate(0deg)';
      return
    } 
    comfortList.style.height = '250px';
    comfortListButton.style.transform = 'rotate(180deg)';
  }


  let roomCards = document.querySelector('.cards-list');
  let card = document.querySelector('.card');
  let btn = document.createElement('button');
  btn.classList = 'button-group__card__button'
  card.style.display = "none";
  for(var i = 0; i < rooms.length; i++) {
    let cloneCard = card.cloneNode(true);
    cloneCard.style.display = 'inline-block';
    let sliderCardImage = cloneCard.querySelectorAll('.slider-card__photo');
    let roomNumber = cloneCard.querySelector('.subhead__number');
    let lux = cloneCard.querySelector('.card__primary');
    let prise = cloneCard.querySelector('.card__text--prise .text__number');
    let stars = cloneCard.querySelectorAll('.star');
    let reviews = cloneCard.querySelector('.card__text--reviews .text__number');
    
    sliderCardImage[0].style.backgroundImage = rooms[i].images;
    roomNumber.innerHTML = rooms[i].number;
    lux.innerHTML = rooms[i].lux;
    prise.innerHTML = rooms[i].prise + '&#8381';
    reviews.innerHTML = rooms[i].reviews;
    let sumStars = rooms[i].stars;
    for (let j = 0; j < sumStars; j++) {
      stars[j].style.backgroundImage = 'url(/images/star.svg)'
    }

    let buttonGroup  = cloneCard.querySelector('.button-group__card');
    let img = cloneCard.querySelectorAll('.slider-card__photo');
    for (let i = 0; i < img.length; i++ ) {
     let clonebutton =  btn.cloneNode(true);
     clonebutton.setAttribute('id', i);
     buttonGroup.appendChild(clonebutton);
    }

    cloneCard.childNodes
    
    roomCards.appendChild(cloneCard)
  }

    let buttonGroup = card.querySelector('.button-group__card');
    let img = card.querySelectorAll('.slider-card__photo');
    for (let i = 0; i < img.length; i++ ) {
    let clonebutton =  btn.cloneNode(true);
    clonebutton.setAttribute('id', i)
    buttonGroup.appendChild(clonebutton);
    }

  let docButtonGroup = document.querySelectorAll('.button-group__card');

  
  let sliderButtonNext = document.querySelectorAll('.slider-card__button--next');
  let slidrButtonBack = document.querySelectorAll('.slider-card__button--back');
  for (let i = 0; i < sliderButtonNext.length; i++) {
   

    
    let imageIndex = 0;
    sliderButtonNext[i].addEventListener("click", function (e) {
      let traslate = 270;
      let count = e.target.parentNode.children[3].children.length - 1;
      imageIndex++;
      if (imageIndex > count) {
        imageIndex = 0;
      }
      e.target.parentNode.children[3].style.transform = 'translate(-' + traslate*imageIndex+ 'px)';

      let buttonGroup = e.target.parentNode.querySelectorAll('.button-group__card__button');
      for(let i = 0; i < buttonGroup.length; i++ ) {
        buttonGroup[i].style.backgroundColor = 'transparent';
      }
      buttonGroup[imageIndex].style.backgroundColor = 'white';      
    })

    slidrButtonBack[i].addEventListener("click", function (e) {
      let traslate = 270;
      let count = e.target.parentNode.children[3].children.length - 1;
      imageIndex--;
      if (imageIndex < 0) {
        imageIndex = count
      }
      e.target.parentNode.children[3].style.transform = 'translate(-' + traslate*imageIndex+ 'px)';

      let buttonGroup = e.target.parentNode.querySelectorAll('.button-group__card__button');
      for(let i = 0; i < buttonGroup.length; i++ ) {
        buttonGroup[i].style.backgroundColor = 'transparent';
      }
      buttonGroup[imageIndex].style.backgroundColor = 'white';
    })

    
      
      docButtonGroup[i].addEventListener("click", function (e) {
        if (e.target.tagName !== 'BUTTON') return;
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
          e.target.parentNode.children[i].style.backgroundColor = 'transparent';
        }
  
        e.target.style.backgroundColor = 'white';
        let traslate = 270;
        let targetIndex = Number(e.target.getAttribute('id'));
          e.target.parentNode.parentNode.children[3].style.transform = 'translate(-' + traslate*targetIndex+ 'px)';
          imageIndex = targetIndex;
      })
    

 
  }

}
