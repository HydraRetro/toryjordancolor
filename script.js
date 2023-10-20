// NAVBAR
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();

function allEventListners() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}
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
// const galleryImgs = document.querySelectorAll('.stillsGallery-img');
// const stillsLightbox = document.querySelector('.stillsLightbox');
// const lightboxImg = document.querySelector('.stillsLightbox-img');
// const closeBtn = document.querySelector('.stillsClose');

// galleryImgs.forEach((img) => {
//     img.addEventListener('click', () => {
//         stillsLightbox.style.display = 'flex';
//         lightboxImg.src = img.src;
//     });
// });

// closeBtn.addEventListener('click', () => {
//     stillsLightbox.style.display = 'none';
// });

// stillsLightbox.addEventListener('click', (event) => {
//     if (event.target === stillsLightbox || event.target === lightboxImg) {
//         stillsLightbox.style.display = 'none';
//     }
// });

function openModal() {
    document.getElementById("myModalFilmStills").style.display = "block";
}

function closeModal() {
    document.getElementById("myModalFilmStills").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesFilmStills");
    let dots = document.getElementsByClassName("demoFilmStills");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeFilmStills", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeFilmStills";
}










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




