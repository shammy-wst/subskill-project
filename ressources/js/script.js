document.addEventListener("DOMContentLoaded", function () {
    const burgerToggle = document.getElementById("burger-toggle");
    const menuContent = document.querySelector(".menu-content");

    burgerToggle.addEventListener("change", function (event) {
        if (event.target.checked) {
            document.addEventListener("click", closeMenuOutside);
        } else {
            document.removeEventListener("click", closeMenuOutside);
        }
    });

    menuContent.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêche la propagation du clic à l'élément parent
    });

    function closeMenuOutside(event) {
        if (!menuContent.contains(event.target) && !burgerToggle.contains(event.target)) {
            burgerToggle.checked = false;
            document.removeEventListener("click", closeMenuOutside);
        }
    }
});