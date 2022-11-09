const slickSlider = document.querySelector(".slick-slider");
const sliderItem = slickSlider.querySelectorAll(".slick-slider__item");
const slickSliderCard = document.querySelector(".slick-slider-card");
const sliderItemCard = slickSliderCard.querySelectorAll(
    ".slick-slider-card__item"
);

document.addEventListener("resize", () => {});
function handleResize() {
    if (sliderItem.length >= 3) {
        if (screen.width < 992) {
            sliderItem.forEach((element, index) => {
                element.style.width = "50vw";
                element.querySelector("img").style.height = "50vw";
                element.style.left = (index - 1) * 55 + 25 + "vw";
            });
        } else {
            sliderItem.forEach((element, index) => {
                element.style.width = "30vw";
                element.querySelector("img").style.height = "30vw";
                element.style.left = (index - 1) * 32 + 17.5 + "vw";
            });
        }
    }
    console.log(sliderItemCard);
    if (sliderItemCard.length >= 3) {
        sliderItemCard.forEach((element, index) => {
            element.style.position = "absolute";
            element.style.width = "50vw";
            element.style.left = (index - 1) * 55 + 25 + "vw";
        });
    }
    slickSlider.style.height = sliderItem[0].offsetHeight + "px";
    slickSliderCard.style.height = sliderItemCard[0].offsetHeight + "px";
}
