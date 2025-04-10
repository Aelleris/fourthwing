document.addEventListener("DOMContentLoaded", function () {
    // Gestion du loader vidéo et affichage du bouton
    const loader = document.getElementById("loader");
    const buttonContainer = document.getElementById('main');

    // Après 5 secondes (durée de la vidéo)
    setTimeout(() => {
        // Fondu sortant de la vidéo
        loader.style.opacity = 0;

        setTimeout(() => {
            // Cache la vidéo et affiche le bouton
            loader.style.display = "none";
            buttonContainer.classList.add('visible');
        }, 1000); // Durée de transition du fondu (1s)
    }, 5000); // La vidéo est affichée pendant 5 secondes
});

const playPause = document.querySelector('.playpause');
const audio = document.querySelector('#audioBg');
let playing = false;
audio.currentTime = 2285; 
audio.volume = 0.1 ;


playPause.addEventListener('click', function() {
    playing = !playing; // la valeur de playing devient son opposé
  
    if (playing) {
        
        playPause.classList.remove("sound");
      playPause.classList.add("replay");
      audio.pause();      
    } else {
       
        playPause.classList.remove("replay");
      playPause.classList.add("sound");
      audio.currentTime = 2285;
       audio.play();      
    }
  });