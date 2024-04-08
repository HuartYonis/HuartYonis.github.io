document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            // Afficher le texte de l'image
            const text = this.querySelector("img").getAttribute("data-text");
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.innerText = text;
            this.appendChild(overlay);

            // Déplacer l'image cliquée au centre
            const clickedImage = this.cloneNode(true);
            this.parentNode.insertBefore(clickedImage, this.parentNode.firstChild);
            this.remove();

            // Déplacer les autres images en haut
            const otherImages = document.querySelectorAll(".image-container");
            otherImages.forEach(image => {
                if (image !== clickedImage) {
                    image.style.display = "inline-block";
                }
            });
        });
    });
});
