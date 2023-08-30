document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll('.nav--link--mobile a');
    const goBackButton = document.querySelector('.go__back');

    navigationLinks.forEach(link => {
        const targetMenuId = link.getAttribute('data-target');
        const targetMenu = document.getElementById(targetMenuId);

        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement de lien par défaut
            closeAllMenus();
            targetMenu.classList.toggle('active');
        });
    });

    goBackButton.addEventListener('click', function() {
        history.back(); // Retourne en arrière dans l'historique du navigateur
    });

    // Fonction pour fermer tous les menus déroulants
    function closeAllMenus() {
        const menus = document.querySelectorAll('.open__menu');
        menus.forEach(menu => {
            menu.classList.remove('active');
        });
    }
});