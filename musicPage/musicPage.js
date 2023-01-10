let mainPage = document.getElementById("mainPage");
let detailsPage = document.getElementById("detailsPage");

mainPage.style.display = "block";
detailsPage.style.display = "none";

const show_main_page = () => {
    mainPage.style.display = "block";
    detailsPage.style.display = "none";
};

const show_details_page = () => {
    mainPage.style.display = "none";
    detailsPage.style.display = "block";
};
