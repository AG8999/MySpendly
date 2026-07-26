// main.js — students will add JavaScript here as features are built

document.addEventListener("DOMContentLoaded", function () {
    var trigger = document.getElementById("how-it-works-trigger");
    var modal = document.getElementById("how-it-works-modal");
    var closeBtn = document.getElementById("how-it-works-close");
    var video = document.getElementById("how-it-works-video");

    if (!trigger || !modal || !closeBtn || !video) return;

    var videoSrc = video.getAttribute("data-src");

    function openModal() {
        video.setAttribute("src", videoSrc + "?autoplay=1");
        modal.classList.add("is-open");
    }

    function closeModal() {
        modal.classList.remove("is-open");
        video.setAttribute("src", "");
    }

    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        openModal();
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
