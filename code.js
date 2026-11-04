let slide_index = 0;

function show_slides() {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot")
    }
    slide_index++;
    if (slide_index > slides.length) {
        slide_index = 1;
    }
    slides[slide_index - 1].classList.add("active-slide");
    dots[slide_index - 1].classList.add("active-dot");
    setTimeout(show_slides, 2000);
}

show_slides();
