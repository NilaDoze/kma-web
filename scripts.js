function handleShareClick(event, url) {
    // Stop the event from propagating (prevents the card's click handler)
    event.stopPropagation();

    // Update the modal's link dynamically
    var shareInput = document.getElementById("shareLink");
    if (shareInput) {
        shareInput.value = "https://niladoze.github.io/kma-web/" + url;
    }
}

function copyToClipboard() {
    const linkInput = document.getElementById("shareLink");
    if (!linkInput) return;

    navigator.clipboard.writeText(linkInput.value)
        .then(() => {
            // Provide a success message
            alert("Link copied! Now go and tell everyone you found this link while fighting off a dragon.");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            // Show an error message if the copy fails
            alert("Oops! Something went wrong. Please try again.");
        });
}




// Get the image and audio elements
const audioImage = document.querySelector('.audio_img');
const audioPlayer = document.getElementById('audioPlayer');

// Toggle play/pause on image click
audioImage.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

const toggleImage = document.getElementById('toggleImage');

// Define the two image sources
const image1 = 'Images/noaudio.png';
const image2 = 'Images/audio.png';

// Add click event listener
toggleImage.addEventListener('click', () => {
// Check current image source and switch
toggleImage.src = toggleImage.src.includes(image1) ? image2 : image1;
});