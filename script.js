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
const accordionWrapper = document.querySelector('.accordionWrapper');

accHDs.forEach((accHD) => {
    accHD.addEventListener('click', toggleItem);
});

function toggleItem() {
    const itemClass = this.parentNode.classList;
    const currentDisplay = accordionWrapper.style.display;

    for (let i = 0; i < accItems.length; i++) {
        if (accItems[i] !== this.parentNode) {
            accItems[i].classList.remove('open');
            accItems[i].classList.add('close');
        }
    }

    if (itemClass.contains('open')) {
        itemClass.remove('open');
        itemClass.add('close');
        accordionWrapper.style.display = currentDisplay === 'block' ? 'flex' : 'block';
    } else {
        itemClass.remove('close');
        itemClass.add('open');
        accordionWrapper.style.display = 'block';
    }
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




