// Dropdown Menu
const toggleButton = document.querySelector('.toggleButton')
const toggleButtonIcon = document.querySelector('.toggleButton i')
const dropDownMenu = document.querySelector('.dropdownMenu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
}

// VIDEO GALLERY
// document.querySelectorAll('.videoContainer video').forEach(vid => {
//     vid.onclick = () => {
//         document.querySelector('.popupVideo').style.display = "block";
//         document.querySelector('.popupVideo video').src = vid.getAttribute('src');
//     }
// })

// document.querySelector('.popupVideo span').onclick = () => {
//     document.querySelector('.popupVideo').style.display = "none";
// }
