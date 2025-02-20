const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const counter = document.querySelector(".counter-value");
const adder = document.querySelector(".add");

var count = 0;
increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

decrease.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});


const main = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("imageModal");
const modalImage = document.querySelector(".modal-image");
const modalThumbnails = document.querySelectorAll(".modal-thumbnails .thumbnail");
const closeModal = document.querySelector(".close");
const prevArrow = document.querySelector(".arrow.prev");
const nextArrow = document.querySelector(".arrow.next");
const cicon = document.querySelector(".cicon");
const cart = document.querySelector(".icon");
const price = document.querySelector(".item-price");
const box = document.querySelector(".cart-dropdown");
const remove = document.querySelector(".remove-item");
const non = document.querySelector(".non");
const inside = document.querySelector(".cart-items");
const avatar = document.querySelector(".profilep");
// Get the elements
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.uml');

// Event listener to toggle the menu visibility
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.add("open")
    if (menu.style.left === '0px') {
        toggleMenu.classList.remove("open");
        menu.style.left = '-300px'; // Hide the menu
    } else {
        menu.style.left = '0'; // Show the menu
    }
});

remove.addEventListener("click", () => {
    box.classList.add("removed");

    non.style.display = 'block';
    box.style.display = 'none';

    cicon.style.display = 'none';
});
adder.addEventListener("click", () => {
    if (box.classList.contains("removed")) {
        non.style.display = 'none';

    }
    cicon.style.display = 'block';
    cicon.textContent = count;
    cart.addEventListener("click", () => {
        if (box.classList.contains("removed")) {
            box.style.display = (box.style.display === "block" ? "none" : "block");

            non.style.display = 'none';
            box.classList.remove("removed");
        }
        price.textContent = `$125 X ${count}= ${125 * count}`;
        box.style.display = (box.style.display === "block" ? "none" : "block");
        avatar.style.border = (avatar.style.border === "4px solid orange" ? "none" : "4px solid orange");

        box.classList.toggle("visible");
    });

});





let currentImageIndex = 0; // Keep track of the current image index

// Sync Main Image with Thumbnail Clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        main.src = thumbnail.src;

        // Update the active thumbnail
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        thumbnail.classList.add("active");

        // Sync modal's image index
        currentImageIndex = index;
    });
});

// Open Modal
main.addEventListener("click", () => {
    modal.style.display = "flex"; // Show the modal
    modalImage.src = main.src; // Set modal image to match main image
    updateActiveThumbnail(currentImageIndex);
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Background Click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Modal Thumbnails Click
modalThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        modalImage.src = thumbnail.src;
        currentImageIndex = index; // Update current image index
        updateActiveThumbnail(index);
    });
});

// Navigate to Previous Image
prevArrow.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + modalThumbnails.length) % modalThumbnails.length;
    modalImage.src = modalThumbnails[currentImageIndex].src;
    updateActiveThumbnail(currentImageIndex);
});

// Navigate to Next Image
nextArrow.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % modalThumbnails.length;
    modalImage.src = modalThumbnails[currentImageIndex].src;
    updateActiveThumbnail(currentImageIndex);
});

// Update Active Thumbnail in Modal
function updateActiveThumbnail(index) {
    // Update the modal thumbnails
    modalThumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add("active");
        } else {
            thumbnail.classList.remove("active");
        }
    });


}
