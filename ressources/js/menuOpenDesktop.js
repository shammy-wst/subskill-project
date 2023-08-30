document.addEventListener("DOMContentLoaded", function() {
    const navigationContainers = document.querySelectorAll('.header__proper__navigation .nav-link-container');
    const menus = document.querySelectorAll('.open__menu');

    navigationContainers.forEach(container => {
        const link = container.querySelector('a');
        const targetMenuId = link.getAttribute('data-target');
        const targetMenu = document.getElementById(targetMenuId);

        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement de lien par défaut
            closeOtherMenus(targetMenu);
            targetMenu.classList.toggle('active');
        });

        // Empêche la propagation du clic aux menus pour éviter la fermeture immédiate
        targetMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    // Ajoutez un gestionnaire d'événements de clic sur l'objet document
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-link-container')) {
            closeAllMenus();
        }
    });

    // Fonction pour fermer tous les menus déroulants sauf celui spécifié
    function closeOtherMenus(excludeMenu) {
        menus.forEach(menu => {
            if (menu !== excludeMenu) {
                menu.classList.remove('active');
            }
        });
    }

    // Fonction pour fermer tous les menus déroulants
    function closeAllMenus() {
        menus.forEach(menu => {
            menu.classList.remove('active');
        });
    }
});
