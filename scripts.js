let prevScroll = window.scrollY;
const navbar = document.getElementById('smartNavbar');
let scrollDelta = 0;
const hideThreshold = 100; // how much you scroll before hiding

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const scrollDiff = currentScroll - prevScroll;

    // Scrolling down
    if (scrollDiff > 0) {
        scrollDelta += scrollDiff;

        if (scrollDelta > hideThreshold) {
            navbar.classList.add('hide-navbar');
        }
    } 
    // Scrolling up
    else {
        scrollDelta = 0;
        navbar.classList.remove('hide-navbar');
    }

    prevScroll = currentScroll;
});


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

const serverId = '1244644562451042404';
const widgetUrl = `https://discord.com/api/guilds/${serverId}/widget.json`;

fetch(widgetUrl)
  .then(res => res.json())
  .then(data => {
    document.getElementById('serverName').textContent = data.name;
    document.getElementById('onlineCount').textContent = `Online: ${data.presence_count}`;
    document.getElementById('inviteLink').href = data.instant_invite;

    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear

    const excludedBots = ['Arcane', 'Carl-bot', 'Craig', 'Yo Nigga']; // List of bots to exclude

    data.members.forEach((member, i) => {
      // Skip the bot members
      if (excludedBots.includes(member.username)) {
        return;
      }

      const div = document.createElement('div');
      div.classList.add('member');
      
      // Get the status color based on the status
      let statusColor;
      switch (member.status) {
        case 'online':
          statusColor = '#4d955f';  // Green for online
          break;
        case 'idle':
          statusColor = '#f5b041';  // Yellow for idle
          break;
        case 'dnd':
          statusColor = '#e74c3c';  // Red for do not disturb
          break;
        case 'offline':
          statusColor = '#7f8c8d';  // Gray for offline
          break;
        default:
          statusColor = '#7f8c8d';  // Default to gray if no status
          break;
      }

      div.innerHTML = `
        <img src="${member.avatar_url}" alt="${member.username}">
        <span class="status-dot" style="background-color: ${statusColor};"></span>
        <span>${member.username}</span>
      `;

      memberList.appendChild(div);

      if (i < data.members.length - 1) {
        const hr = document.createElement('hr');
        memberList.appendChild(hr);
      }
    });
  })
  .catch(error => {
    console.error('Widget failed:', error);
    document.getElementById('discordWidget').innerHTML = "<p>Widget disabled or server offline.</p>";
  });

document.getElementById('year').textContent = new Date().getFullYear();
