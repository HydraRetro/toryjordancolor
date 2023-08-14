// FEATURE GALLERY - FLEX ON CLICK
const galleryElements = document.querySelectorAll('.galleryFlex');
const mediaQuery = window.matchMedia('(max-width: 576px)');

const toggleDisplay = (element) => {
    if (element.style.display === 'block') {
        element.style.display = 'flex';
    } else {
        element.style.display = 'block';
    }
};

const clickHandler = (element) => {
    return () => {
        if (!mediaQuery.matches) {
            toggleDisplay(element);
        }
    };
};

galleryElements.forEach(element => {
    element.addEventListener('click', clickHandler(element));
});

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

    video.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxVideo.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=0`);
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.setAttribute('src', '');
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.setAttribute('src', '');
    });
});

// BACK TO TOP
const topButton = document.getElementById("topBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};




