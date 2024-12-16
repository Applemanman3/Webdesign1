// List of music files (update these paths with your actual music file locations)
const songs = [
    '/Music/Let It Snow, Let It Snow, Let It Snow (8-Bit Version).mp3',
    '/Music/All I Want for Christmas Is You (8-Bit Version).mp3',
    '/Music/Last Christmas (8-Bit Version).mp3',
    '/Music/Deck the Halls (8-Bit Version).mp3',
    '/Music/Youre a Mean One Mr. Grinch (8-Bit Version).mp3',
];

// Get references to the button, audio player, and current song display elements in the DOM
const playMusicButton = document.getElementById('play-music-button');
const audioPlayer = document.getElementById('audio-player');
const currentSongDisplay = document.getElementById('current-song');

// Initialize the audio player's volume to a lower value (10%)
audioPlayer.volume = 0.1;

// Function to play a random song
function playRandomSong() {
    // Pick a random index from the songs array using Math.random() and Math.floor()
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];

    // Set the audio player's source to the selected song
    audioPlayer.src = selectedSong;

    // Listen for the 'loadeddata' event to ensure the audio file is fully loaded before playing
    audioPlayer.addEventListener('loadeddata', () => {
        // Attempt to play the audio and update the current song display
        audioPlayer.play()
            .then(() => {
                // Update the display with the name of the current song being played
                currentSongDisplay.textContent = `Now Playing: ${selectedSong.split('/').pop()}`;
            })
            .catch(error => {
                // Log any errors if the audio playback fails
                console.error("Error playing the audio: ", error);
            });
    });

    // Handle errors in loading the audio file (e.g., file not found or unsupported format)
    audioPlayer.onerror = function() {
        console.error("Error loading the audio file.");
        currentSongDisplay.textContent = "Failed to load song. Please try again."; // Show error message
    };
}

// Attach the playRandomSong function to the play button's click event
playMusicButton.addEventListener('click', playRandomSong);