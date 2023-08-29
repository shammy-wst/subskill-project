document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les cartes
    const teamCards = document.querySelectorAll('.team__card');

    // Sélectionnez le modal
    const modal = document.querySelector('.our__team__modal');

    // Sélectionnez le bouton de fermeture du modal en utilisant la variable modalClose
    const modalClose = document.querySelector('.modal__close a');

    // Fonction pour ouvrir le modal
    function openModal() {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open'); // Empêcher le défilement
    }

    // Fonction pour fermer le modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Rétablir le défilement
    }

    // Parcourez toutes les cartes pour ajouter un gestionnaire d'événement de clic
    teamCards.forEach(card => {
        card.addEventListener('click', openModal);
    });

    // Ajoutez un gestionnaire d'événement de clic au bouton de fermeture
    modalClose.addEventListener('click', closeModal);
});