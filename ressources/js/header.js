let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    prevScrollPos = currentScrollPos;
});
