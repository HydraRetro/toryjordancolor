// NAVBAR
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
});

navLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navToggler.click();
        }
    });
});


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
function openLightbox(videoId) {
    const videoLightbox = document.getElementById('videoLightbox');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    videoLightbox.style.display = 'flex';
}

function closeLightbox() {
    const videoLightbox = document.getElementById('videoLightbox');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    videoLightbox.style.display = 'none';
}

window.addEventListener('click', (event) => {
    const videoLightbox = document.getElementById('videoLightbox');
    if (event.target === videoLightbox) {
        closeLightbox();
    }
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




