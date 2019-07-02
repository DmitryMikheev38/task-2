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

  changeLocationReg() {
    view.changeLocation('registration.html')
  },

  changeLocationEnter() {
    view.changeLocation('login.html')
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
        var buttonEnter = document.querySelector('.registration__button-default');
        var registrationButton = document.querySelector('.header__button');
        var headerButtonEnter = document.querySelector('.header__button-default')

        for (let i = 0; i < inputs.length; i++) {
          inputs[i].onfocus = controller.addFocus;
          inputs[i].onblur = controller.disabledFocus;
        }

        registrationButton.onclick = controller.changeLocationReg;
        buttonEnter.onclick = controller.changeLocationEnter;
        headerButtonEnter.onclick = controller.changeLocationEnter;
      }
    }

    app.init();

}());


/* ------------------------- anonimus initialize function ---------------------------------------- */