function handleResize() {
    const slickSlider = document.querySelector(".slick-slider");

    if (slickSlider) {
        const sliderItem = slickSlider.querySelectorAll(".slick-slider__item");
        const slickSliderCard = document.querySelector(".slick-slider-card");
        const sliderItemCard = slickSliderCard.querySelectorAll(
            ".slick-slider-card__item"
        );
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

    //create carousel
    //script slider carousel
    const carousel = document.querySelector(".carousel");

    if (carousel) {
        let carouselDots = carousel.querySelector(".carousel__control--dots");
        let carouselItems = document.querySelectorAll(".carousel__item");
        carouselDots.innerHTML = "";
        carouselItems.forEach((element, index) => {
            let span = document.createElement("span");
            span.style.cursor = "pointer";
            if (screen.width < 992) {
                span.style.width = "5px";
                span.style.height = "5px";
                span.style.backgroundColor = "grey";
            } else {
                span.style.width = "20px";
                span.style.height = "20px";
                span.style.backgroundColor = "grey";
            }

            span.style.borderRadius = "50%";
            span.style.display = "inline-block";
            span.setAttribute("onclick", "handleClickDot(this)");
            if (index === 0) {
                span.style.backgroundColor = "white";
                element.style.display = "block";
            } else {
                span.style.backgroundColor = "grey";
                element.style.display = "none";
            }
            carouselDots.appendChild(span);
        });
    }

    // Product detail element
    const relatedItem = document.querySelector("#related-item");
    if (relatedItem) {
        const item = relatedItem.children;
        console.log(item[2]);
        if (screen.width < 992) {
            for (let i = 0; i < item.length; i++) {
                item[i].style.display = "inherit";
            }
        } else {
            console.log(item[2]);
            for (let i = 0; i < item.length; i++) {
                if (i >= 4) {
                    item[i].style.display = "none";
                }
            }
        }
    }

    //display none
    // const displayDesktop = document.querySelector(".display-none-desktop");
    // const displayMobile = document.querySelector(".display-none-moblie");
    // if (screen.width < 992) {
    //     displayMobile.style.display = "none";
    //     displayDesktop.style.display = "initial";
    // } else {
    //     displayDesktop.style.display = "none";
    //     displayMobile.style.display = "initial";
    // }
}

function handleClickDot(element) {
    let carouselItems = document.querySelectorAll(".carousel__item");
    let carouselDots = document.querySelector(
        ".carousel__control--dots"
    ).childNodes;
    if (!Number.isInteger(element)) {
        const index = Array.from(element.parentElement.children).indexOf(
            element
        );
        carouselItems.forEach((item, i) => {
            if (index === i) {
                carouselDots[i].style.backgroundColor = "white";
                item.style.display = "block";
            } else {
                carouselDots[i].style.backgroundColor = "grey";
                item.style.display = "none";
            }
        });
    } else {
        let index;
        let i = element;
        carouselDots.forEach((item, count) => {
            if (item.style.backgroundColor === "white") {
                index = count;
            }
        });

        if (index === 0 && i < 0) {
            carouselDots[carouselDots.length + i].style.backgroundColor =
                "white";
            carouselItems[carouselItems.length + i].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselItems[index].style.display = "none";
        } else if (index === carouselDots.length - 1 && i > 0) {
            carouselDots[0].style.backgroundColor = "white";
            carouselItems[0].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselItems[index].style.display = "none";
        } else {
            console.log("gg", index, i);
            carouselDots[index + i].style.backgroundColor = "white";
            carouselItems[index + i].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselItems[index].style.display = "none";
        }
    }
}
function prevNextSlide(count) {
    handleClickDot(count);
}
