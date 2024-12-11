// List of music files (update these paths with your actual music file locations)
const songs = [
    '/Music/Let It Snow, Let It Snow, Let It Snow (8-Bit Version).mp3',
    '/Music/All I Want for Christmas Is You (8-Bit Version).mp3',
    '/Music/Last Christmas (8-Bit Version).mp3',
    '/Music/Deck the Halls (8-Bit Version).mp3',
    '/Music/Youre a Mean One Mr. Grinch (8-Bit Version).mp3',
];

// Get references to the button, audio player, and current song display
const playMusicButton = document.getElementById('play-music-button');
const audioPlayer = document.getElementById('audio-player');
const currentSongDisplay = document.getElementById('current-song');

// Initialize volume
audioPlayer.volume = 0.1;

// Function to play a random song
function playRandomSong() {
    // Pick a random index from the songs array
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];

    // Set the audio source to the selected song
    audioPlayer.src = selectedSong;

    // Listen for the 'loadeddata' event to ensure the audio is ready to play
    audioPlayer.addEventListener('loadeddata', () => {
        audioPlayer.play()
            .then(() => {
                // Update the current song display
                currentSongDisplay.textContent = `Now Playing: ${selectedSong.split('/').pop()}`;
            })
            .catch(error => {
                console.error("Error playing the audio: ", error);
            });
    });

    // Handle errors if the audio file fails to load
    audioPlayer.onerror = function() {
        console.error("Error loading the audio file.");
        currentSongDisplay.textContent = "Failed to load song. Please try again.";
    };
}

// Attach the playRandomSong function to the button's click event
playMusicButton.addEventListener('click', playRandomSong);
