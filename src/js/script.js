
/*global window*/
(function () {
    "use strict";

    let $icon = document.getElementById("navIconSVG");
    let $nav = document.getElementById("menuList");

    const fToggleNav = function () {
        $icon.classList.toggle("open");
        $nav.classList.toggle("nav--transition");
    }

    const fPageIsLoaded = function () {
        $icon.addEventListener("click", fToggleNav, false);
    };

    const fChangeSelected = function (oEvent) {
      let selectValue, currentShow, showPrice, showDate, ticketForm;
      let tag = oEvent.target;
      while(!tag.classList.contains("show__button")) {
        tag = tag.parentNode;
      }
      currentShow = tag.parentNode.parentNode;

      selectValue = currentShow.querySelector(".show__title--text").innerHTML;

      document.querySelectorAll(`#formShow .form__option`).forEach((option) => {
        option.removeAttribute('selected');
      });

      document.querySelector('.tickets__form').querySelector(`#formShow .form__option[value="${selectValue}"]`).setAttribute('selected', 'selected');
      showPrice = currentShow.querySelector(`[itemprop="price"]`).innerHTML.replace(')', '');
      showDate = {"date": currentShow.querySelector(`.show__date`).innerHTML, "datetime": currentShow.querySelector(`time[datetime]`).innerHTML.split("T")[0]};

      ticketForm = document.querySelector('.tickets__form');
      ticketForm.querySelector(`time.form__date`).setAttribute('time', showDate.datetime);
      ticketForm.querySelector(`time.form__date`).innerHTML = showDate.date;
      ticketForm.querySelector(`.form__price .form__price`).innerHTML = "$ " + showPrice;
    }

    const fChangeInfos = function (oEvent) {
      document.querySelectorAll('.shows__show').forEach((show) => {
        if(show.querySelector(".show__title--text").innerHTML == oEvent.target.options[oEvent.target.selectedIndex].text) {
          this.currentShow = show;
        }
      });
      let showPrice = this.currentShow.querySelector(`[itemprop="price"]`).innerHTML.replace(')', '');
      let showDate = {"date": this.currentShow.querySelector(`.show__date`).innerHTML, "datetime": this.currentShow.querySelector(`time[datetime]`).innerHTML.split("T")[0]};

      let ticketForm = document.querySelector('.tickets__form');
      ticketForm.querySelector(`time.form__date`).setAttribute('time', showDate.datetime);
      ticketForm.querySelector(`time.form__date`).innerHTML = showDate.date;
      ticketForm.querySelector(`.form__price .form__price`).innerHTML = "$ " + showPrice;
    }

    // gestion de l'événement "load" pour démarrer le script
    window.addEventListener("load", fPageIsLoaded, false);
    document.querySelectorAll(".show__button").forEach((button) => {
      button.addEventListener("click", fChangeSelected);
    });

    document.querySelector("#formShow").addEventListener("change", fChangeInfos);
}());
