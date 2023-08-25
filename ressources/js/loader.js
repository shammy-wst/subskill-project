window.addEventListener('load', function() {
    // Ajoute la classe pour le fondu au bout de la durée de temporisation
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 0500); // Durée en millisecondes (ici, 2 secondes)
});
