    document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les cartes
    const teamCards = document.querySelectorAll('.team__card');

    // Sélectionnez le modal
    const modal = document.querySelector('.our__team__modal');

    // Sélectionnez l'élément d'affichage de l'image dans le modal
    const modalImage = modal.querySelector('.modal__img img');

    // Sélectionnez le bouton de fermeture du modal en utilisant la variable modalClose
    const modalClose = document.querySelector('.modal__close a');

    // URL de l'image actuellement affichée dans le modal
    let currentImageSrc = '';

    // Fonction pour ouvrir le modal
    function openModal(imageSrc) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open'); // Empêcher le défilement

    // Mettez à jour l'URL de l'image et affichez-la
    currentImageSrc = imageSrc;
    modalImage.src = currentImageSrc;
}

    // Fonction pour fermer le modal
    function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Rétablir le défilement
}

    // Parcourez toutes les cartes pour ajouter un gestionnaire d'événement de clic
    teamCards.forEach(card => {
    card.addEventListener('click', function() {
    const cardImage = card.querySelector('.img__testimony img');
    openModal(cardImage.src);
});
});

    // Ajoutez un gestionnaire d'événement de clic au bouton de fermeture
    modalClose.addEventListener('click', closeModal);

    // Ajoutez un gestionnaire d'événement de clic au modal pour le fermer
    modal.addEventListener('click', function(event) {
    // Fermez le modal uniquement si le clic se produit sur le fond modal, pas sur son contenu
    if (event.target === modal) {
    closeModal();
}
});
});