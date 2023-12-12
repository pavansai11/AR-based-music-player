// Set up howler instances for each sound
const pianoSound = new Howl({ src: ['music/piano.mp3'], mute: true, autoplay: true, loop: true });
const ukuleleSound = new Howl({ src: ['music/ukulele.mp3'], mute: true, autoplay: true, loop: true });
const vocalsSound = new Howl({ src: ['music/vocals.mp3'], mute: true, autoplay: true, loop: true });

// Get all elements with the marker id
const markers = document.querySelectorAll('[type="barcode"]');

// Add event listeners to each marker
markers.forEach(marker => {
  marker.addEventListener('markerFound', () => {
    switch (marker.id) {
      case 'piano-marker':
        pianoSound.mute(false);
        break;
      case 'ukulele-marker':
        ukuleleSound.mute(false);
        break;
      case 'vocals-marker':
        vocalsSound.mute(false);
        break;
    }
  });

  marker.addEventListener('markerLost', () => {
    // Mute the corresponding sound
    switch (marker.id) {
      case 'piano-marker':
        pianoSound.mute(true);
        break;
      case 'ukulele-marker':
        ukuleleSound.mute(true);
        break;
      case 'vocals-marker':
        vocalsSound.mute(true);
        break;
    }
  });
});