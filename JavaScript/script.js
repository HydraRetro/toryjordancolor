// Dropdown Menu
const toggleButton = document.querySelector('.toggleButton')
const toggleButtonIcon = document.querySelector('.toggleButton i')
const dropDownMenu = document.querySelector('.dropdownMenu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
}

// FILM STILLS
const galleryImgs = document.querySelectorAll('.stillsGallery-img');
const stillsLightbox = document.querySelector('.stillsLightbox');
const lightboxImg = document.querySelector('.stillsLightbox-img');
const closeBtn = document.querySelector('.stillsClose');

galleryImgs.forEach((img) => {
    img.addEventListener('click', () => {
        stillsLightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    stillsLightbox.style.display = 'none';
});

stillsLightbox.addEventListener('click', (event) => {
    if (event.target === stillsLightbox || event.target === lightboxImg) {
        stillsLightbox.style.display = 'none';
    }
});


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









