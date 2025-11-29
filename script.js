// Pour les épisodes
const episodeSelect = document.getElementById('episode-select');
if(episodeSelect){
    const videoFrame = document.getElementById('video-frame');

    // Charger épisode sauvegardé
    const savedEpisode = localStorage.getItem('gothamEpisode');
    if(savedEpisode){
        episodeSelect.value = savedEpisode;
        videoFrame.src = savedEpisode;
    }

    // Sauvegarder épisode au changement
    episodeSelect.addEventListener('change', function() {
        const url = this.value;
        if(url){
            videoFrame.src = url;
            localStorage.setItem('gothamEpisode', url);
        }
    });
}
