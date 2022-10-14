const buttonOpen = document.querySelector(".page-header__menu");
const menu = document.querySelector(".page-header__nav-wrapper");
const buttonSliderGreece = document.querySelector(".page-main__tours-slider-button-greece");
const buttonSliderAlbania = document.querySelector(".page-main__tours-slider-button-albania");
const buttonSliderMacedonia = document.querySelector(".page-main__tours-slider-button-macedonia");
const buttonSliderMontenegro = document.querySelector(".page-main__tours-slider-button-montenegro");
const buttonSliderCroatia = document.querySelector(".page-main__tours-slider-button-croatia");
const tourSliderGreece = document.querySelector(".page-main__tours-description-item-greece");
const tourSliderAlbania = document.querySelector(".page-main__tours-description-item-albania");
const tourSliderMacedonia = document.querySelector(".page-main__tours-description-item-macedonia");
const tourSliderMontenegro = document.querySelector(".page-main__tours-description-item-montenegro");
const tourSliderCroatia = document.querySelector(".page-main__tours-description-item-croatia");
const buyTourTours = document.querySelectorAll(".page-main__tours-description-button");
const buyTourPrices = document.querySelectorAll(".page-main__prices-package-button");
const popup = document.querySelector(".popup");
const pageElement = document.querySelector(".page");
const closePopup = document.querySelector(".popup__wrapper-button-close");
const ESC_KEYCODE = 27;

menu.classList.add("page-header__nav-wrapper-inactive");
buttonOpen.classList.remove("page-header__opened-menu");

buttonOpen.addEventListener("click", function (evt) {
  if (!menu.classList.contains("page-header__nav-wrapper-inactive")) {
    menu.classList.add("page-header__nav-wrapper-inactive");
    buttonOpen.classList.remove("page-header__opened-menu");
  } else {
    menu.classList.remove("page-header__nav-wrapper-inactive");
    buttonOpen.classList.add("page-header__opened-menu");
  }
});


for (let buyTourTour of buyTourTours) {
  buyTourTour.addEventListener("click", function () {
    popup.classList.add("popup--active");
    pageElement.classList.add("page--inactive");
  });
}

for (let buyTourPrice of buyTourPrices) {
  buyTourPrice.addEventListener("click", function () {
    popup.classList.add("popup--active");
    pageElement.classList.add("page--inactive");
  });
}

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup--active");
  pageElement.classList.remove("page--inactive");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === ESC_KEYCODE) {
    popup.classList.remove("popup--active");
    pageElement.classList.remove("page--inactive");
  }
});


buttonSliderGreece.addEventListener("click", function () {
  if (!tourSliderGreece.classList.contains("page-main__tours-description-item-active") && !buttonSliderGreece.classList.contains("active-slider")) {
    buttonSliderGreece.classList.add("active-slider");
    buttonSliderAlbania.classList.remove("active-slider");
    buttonSliderMacedonia.classList.remove("active-slider");
    buttonSliderMontenegro.classList.remove("active-slider");
    buttonSliderCroatia.classList.remove("active-slider");
    tourSliderGreece.classList.add("page-main__tours-description-item-active");
    tourSliderAlbania.classList.remove("page-main__tours-description-item-active");
    tourSliderMacedonia.classList.remove("page-main__tours-description-item-active");
    tourSliderMontenegro.classList.remove("page-main__tours-description-item-active");
    tourSliderCroatia.classList.remove("page-main__tours-description-item-active");
  }
});

buttonSliderAlbania.addEventListener("click", function () {
  if (!tourSliderAlbania.classList.contains("page-main__tours-description-item-active") && !buttonSliderAlbania.classList.contains("active-slider")) {
    buttonSliderGreece.classList.remove("active-slider");
    buttonSliderAlbania.classList.add("active-slider");
    buttonSliderMacedonia.classList.remove("active-slider");
    buttonSliderMontenegro.classList.remove("active-slider");
    buttonSliderCroatia.classList.remove("active-slider");
    tourSliderGreece.classList.remove("page-main__tours-description-item-active");
    tourSliderAlbania.classList.add("page-main__tours-description-item-active");
    tourSliderMacedonia.classList.remove("page-main__tours-description-item-active");
    tourSliderMontenegro.classList.remove("page-main__tours-description-item-active");
    tourSliderCroatia.classList.remove("page-main__tours-description-item-active");
  }
});

buttonSliderMacedonia.addEventListener("click", function () {
  if (!tourSliderMacedonia.classList.contains("page-main__tours-description-item-active") && !buttonSliderMacedonia.classList.contains("active-slider")) {
    buttonSliderGreece.classList.remove("active-slider");
    buttonSliderAlbania.classList.remove("active-slider");
    buttonSliderMacedonia.classList.add("active-slider");
    buttonSliderMontenegro.classList.remove("active-slider");
    buttonSliderCroatia.classList.remove("active-slider");
    tourSliderGreece.classList.remove("page-main__tours-description-item-active");
    tourSliderAlbania.classList.remove("page-main__tours-description-item-active");
    tourSliderMacedonia.classList.add("page-main__tours-description-item-active");
    tourSliderMontenegro.classList.remove("page-main__tours-description-item-active");
    tourSliderCroatia.classList.remove("page-main__tours-description-item-active");
  }
});

buttonSliderMontenegro.addEventListener("click", function () {
  if (!tourSliderMontenegro.classList.contains("page-main__tours-description-item-active") && !buttonSliderMontenegro.classList.contains("active-slider")) {
    buttonSliderGreece.classList.remove("active-slider");
    buttonSliderAlbania.classList.remove("active-slider");
    buttonSliderMacedonia.classList.remove("active-slider");
    buttonSliderMontenegro.classList.add("active-slider");
    buttonSliderCroatia.classList.remove("active-slider");
    tourSliderGreece.classList.remove("page-main__tours-description-item-active");
    tourSliderAlbania.classList.remove("page-main__tours-description-item-active");
    tourSliderMacedonia.classList.remove("page-main__tours-description-item-active");
    tourSliderMontenegro.classList.add("page-main__tours-description-item-active");
    tourSliderCroatia.classList.remove("page-main__tours-description-item-active");
  }
});

buttonSliderCroatia.addEventListener("click", function () {
  if (!tourSliderCroatia.classList.contains("page-main__tours-description-item-active") && !buttonSliderCroatia.classList.contains("active-slider")) {
    buttonSliderGreece.classList.remove("active-slider");
    buttonSliderAlbania.classList.remove("active-slider");
    buttonSliderMacedonia.classList.remove("active-slider");
    buttonSliderMontenegro.classList.remove("active-slider");
    buttonSliderCroatia.classList.add("active-slider");
    tourSliderGreece.classList.remove("page-main__tours-description-item-active");
    tourSliderAlbania.classList.remove("page-main__tours-description-item-active");
    tourSliderMacedonia.classList.remove("page-main__tours-description-item-active");
    tourSliderMontenegro.classList.remove("page-main__tours-description-item-active");
    tourSliderCroatia.classList.add("page-main__tours-description-item-active");
  }
});
