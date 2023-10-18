// NAVBAR
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}

// FEATURE GALLERY - FLEX ON CLICK
const accItems = document.querySelectorAll('.accordionItem');
const accHDs = document.querySelectorAll('.accordionItemHeading');
const accordionWrapper = document.querySelector('.image-grid');

accHDs.forEach((accHD) => {
    accHD.addEventListener('click', toggleItem);
});

function toggleItem() {
    const itemClass = this.parentNode.classList;
    const isItemOpen = itemClass.contains('open');

    accItems.forEach(item => {
        if (item !== this.parentNode) {
            item.classList.remove('open');
            item.classList.add('close');
        }
    });

    itemClass.remove(isItemOpen ? 'open' : 'close');
    itemClass.add(isItemOpen ? 'close' : 'open');

    accordionWrapper.style.display = isItemOpen ? 'grid' : 'block';
    accordionWrapper.style.maxWidth = isItemOpen ? '100%' : '90%';
}


// Scroll when image clicked
const images = document.querySelectorAll('.scrollImage');

images.forEach(image => {
    image.addEventListener('click', () => {
        image.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
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




