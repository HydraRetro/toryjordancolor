// Dropdown Menu
const toggleButton = document.querySelector('.toggleButton')
const toggleButtonIcon = document.querySelector('.toggleButton i')
const dropDownMenu = document.querySelector('.dropdownMenu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
}

// VIDEO GALLERY
const videos = document.querySelectorAll('.video');
const lightbox = document.querySelector('.lightbox');
const lightboxVideo = document.querySelector('.lightbox-video iframe');
const closeButton = document.querySelector('.close-button');

videos.forEach(video => {
    const id = video.getAttribute('data-id');
    const thumbnail = video.querySelector('img');
    const playButton = video.querySelector('.play-button');

    video.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxVideo.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.setAttribute('src', '');
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.setAttribute('src', '');
    });

    // Show play button on hover
    video.addEventListener('mouseenter', () => {
        playButton.style.display = 'block';
    });

    video.addEventListener('mouseleave', () => {
        playButton.style.display = 'none';
    });

    // Hide play button on click and show video
    playButton.addEventListener('click', event => {
        event.stopPropagation();
        video.click();
    });
});






