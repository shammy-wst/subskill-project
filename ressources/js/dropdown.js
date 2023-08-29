document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.getElementById('menu');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            // Ajouter la classe pour bloquer le défilement
            document.body.classList.add('no-scroll');
        } else {
            // Supprimer la classe pour réactiver le défilement
            document.body.classList.remove('no-scroll');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('menu__close');

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
