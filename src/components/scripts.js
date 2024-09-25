function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-content");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.closest('.bg-blue-500');
            const hiddenContent = this.nextElementSibling;
            const toggleIcon = this.querySelector(".toggle-icon");

            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                toggleIcon.classList.remove("fa-chevron-down");
                toggleIcon.classList.add("fa-chevron-up");
            } else {
                hiddenContent.style.display = "none";
                toggleIcon.classList.remove("fa-chevron-up");
                toggleIcon.classList.add("fa-chevron-down");
            }

            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});



const carousel = document.getElementById('carousel');
const slides = carousel.children.length;
let index = 0;

function moveCarousel() {
    index = (index + 1) % slides;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

const intervalId = setInterval(moveCarousel, 10000);

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    moveCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    index = (index - 1 + slides) % slides;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${index * 100}%)`;
});