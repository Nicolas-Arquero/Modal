// Récupération des éléments HTML nécessaires
let modal = document.getElementById("myModal"); // Récupère l'élément de la modal par son ID
let modalImg = document.querySelector(".modal-content"); // Récupère l'élément de l'image de la modal par sa classe
let images = document.querySelectorAll(".image"); // Récupère tous les éléments des images par leur classe
let currentIndex = 0; // Variable pour suivre l'index de l'image actuellement affichée dans la modal

// Fonction pour ouvrir la modal
function openModal(image) {
  modal.style.display = "block"; // Affiche la modal en modifiant le style CSS
  modalImg.src = image.src; // Définit la source de l'image de la modal en utilisant la source de l'image cliquée
  currentIndex = Array.from(images).indexOf(image); // Trouve l'index de l'image cliquée dans la liste des images et le stocke dans currentIndex
}

// Fonction pour fermer la modal
function closeModal() {
  modal.style.display = "none"; // Masque la modal en modifiant le style CSS
}

// Fonction pour changer l'image affichée dans la modal
function changeImage(n) {
  currentIndex += n; // Incrémente ou décrémente l'index en fonction du paramètre n (1 pour l'image suivante, -1 pour l'image précédente)
  if (currentIndex >= images.length) {
    // Si l'index dépasse le nombre d'images, revenir à la première image
    currentIndex = 0;
  } else if (currentIndex < 0) {
    // Si l'index devient négatif, passer à la dernière image
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src; // Définit la source de l'image de la modal en utilisant la source de l'image correspondant à l'index actuel
}
