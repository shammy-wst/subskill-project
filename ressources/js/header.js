document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos === 0) {
            document.querySelector('.header').classList.remove('active');
        } else if (prevScrollPos > currentScrollPos) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }

        prevScrollPos = currentScrollPos;
    });
});
