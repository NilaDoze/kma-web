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

function filterByCategory(category) {
    // Get all blog blocks
    const allPosts = document.querySelectorAll('.row .col-12, .col-6.col-md-4.col-lg-3');

    // Show all blog posts if 'all' category is selected (optional)
    if (category === 'all') {
        allPosts.forEach(post => {
            post.style.display = 'block'; // Show all posts
        });
    } else {
        // Filter by the selected category
        allPosts.forEach(post => {
            // If the post has the category class, display it; otherwise, hide it
            if (post.classList.contains(`category-${category}`)) {
                post.style.display = 'block'; // Show post
            } else {
                post.style.display = 'none'; // Hide post
            }
        });
    }

    // Remove the 'active' class from all buttons
    let buttons = document.querySelectorAll('.btn-outline-light');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    const clickedButton = document.getElementById(`category-${category}`);
    clickedButton.classList.add('active');
}

