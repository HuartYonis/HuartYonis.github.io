document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            // Retirer le texte de l'image précédente
            const previousOverlay = document.querySelector(".overlay");
            if (previousOverlay) {
                previousOverlay.remove();
            }

            // Afficher le texte de l'image actuelle
            const text = this.querySelector("img").getAttribute("data-text");
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.innerText = text;
            this.appendChild(overlay);

            // Centrer l'image cliquée
            const clickedImage = this.cloneNode(true);
            this.parentNode.insertBefore(clickedImage, this.parentNode.firstChild);
            this.remove();

            // Centrer les autres images en haut
            const otherImages = document.querySelectorAll(".image-container");
            otherImages.forEach(image => {
                if (image !== clickedImage) {
                    image.style.display = "inline-block";
                }
            });
        });
    });
});
