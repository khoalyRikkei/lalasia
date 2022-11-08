const slickSlider = document.querySelector(".slick-slider");
const sliderItem = slickSlider.querySelectorAll(".slick-slider__item");

if (sliderItem.length >= 3) {
    console.log(window.innerWidth);
    if (screen.width < 992) {
        sliderItem.forEach((element, index) => {
            element.style.left = (index - 1) * 55 + 25 + "vw";
        });
    } else {
        sliderItem.forEach((element, index) => {
            element.style.left = (index - 1) * 55 + 50 + "vw";
        });
    }
}
function handleMouseDown() {
    return true;
}
function handleMouseUp() {
    return false;
}

function handleMoveOver() {}
