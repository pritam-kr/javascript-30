const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);

    sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        // console.log(slideInAt);

        const imageBottom = image.offsetTop + image.height;

        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast ) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }

        // Window.scrollY tells how much you've scrolled from top of browser
        // floating-point value indicating the number of pixels the document is currently scrolled vertically from the origin, where a positive value means the content is scrolled to upward. If the document is rendered on a subpixel-precise device, then the returned value is also subpixel-precise and may contain a decimal component. If the document isn't scrolled at all up or down, then scrollY is 0.

        // Window.innerHeight  returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.
    });
}

window.addEventListener('scroll', debounce(checkSlide));


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};