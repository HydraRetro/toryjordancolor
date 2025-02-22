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
const accHDs = document.querySelectorAll('.videoImageThumbnail');
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

// LIGHTBOX - NEW
const thumbnails = document.querySelectorAll(".hydraThumbnail");
const lightbox = document.getElementById("hydraLightbox");
const closeBtn = document.getElementById("hydraCloseBtn");
const lightboxContent = document.querySelector(".hydraLightbox-content");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => openLightbox(thumbnail));
});

function openLightbox(thumbnail) {
    const dataType = thumbnail.dataset.type;
    const dataSrc = thumbnail.dataset.source;

    if (dataType === "video") {
        lightboxContent.innerHTML = `<div class="hydra-iframe-container"><iframe id="hydraVideo" src="${dataSrc}" frameborder="0" allowfullscreen></iframe></div>`;
    } else if (dataType === "image") {
        const imageElement = new Image();
        imageElement.src = dataSrc;
        imageElement.alt = "Fullscreen Image";
        imageElement.classList.add("hydraLightbox-image");

        lightboxContent.innerHTML = ""; // Clear any previous content
        lightboxContent.appendChild(imageElement);
    }

    lightbox.classList.remove("hidden");
}

function closeLightbox() {
    lightboxContent.innerHTML = "";
    lightbox.classList.add("hidden");
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
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




