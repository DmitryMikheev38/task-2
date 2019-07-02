/* -------------------------------------- begin View ---------------------------------------------- */

var view = {

  showFocus(el) {
    el.style.borderColor = "rgba(31, 32, 65, 0.5)";
  },

  delleteFocus (el) {
    el.removeAttribute('style');
  },

  changeLocation(url) {
    window.location.href = url;
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
  }

}

/* -------------------------------------- and Model ----------------------------------------------- */





/* ---------------------------------- begin Controller -------------------------------------------- */

var controller = {
  addFocus(e) {
    var el = e.target.parentNode;
    view.showFocus(el);
  },

  disabledFocus(e) {
    var el = e.target.parentNode;
    view.delleteFocus (el)
  },

  changeLocationCreateAc() {
    view.changeLocation('registration.html')
  },

  changeLocationReg() {
    view.changeLocation('registration.html')
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
        
      },

      event() {
        var inputs = document.querySelectorAll('.input-wrapper__input');
        var buttonCreateAcaunt = document.querySelector('.login__button-default');
        var registrationButton = document.querySelector('.header__button');

        for (let i = 0; i < inputs.length; i++) {
          inputs[i].onfocus = controller.addFocus;
          inputs[i].onblur = controller.disabledFocus;
        }

        buttonCreateAcaunt.onclick = controller.changeLocationCreateAc;
        registrationButton.onclick = controller.changeLocationReg;
      }
    }

    app.init();

}());


/* ------------------------- anonimus initialize function ---------------------------------------- */