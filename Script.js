document.addEventListener("DOMContentLoaded", function(){
    let currentPage = 1;
    const pages = document.querySelectorAll(".page-content");
    const pageLinks = document.querySelectorAll(".page-link");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");

    function showPage(page) {
        pages.forEach((p) => {
            p.style.display = p.getAttribute("data-page") == page ? "block" : "none";
        });
        currentPage = page;
        updateButtons();
    }

    function updateButtons() {
        previousButton.classList.toggle("disabled", currentPage == 1);
        nextButton.classList.toggle("disabled", currentPage == pages.length);
    }

    pageLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute("data-page"));
            showPage(page);
        });
    });

    previousButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 1) showPage(currentPage - 1);
    });

    nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < pages.length) showPage(currentPage + 1);     
    });

    showPage(currentPage);
})