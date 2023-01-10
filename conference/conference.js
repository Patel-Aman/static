let conferecePage = document.getElementById("conferencePage");
let conferenceDetailes = document.getElementById("conferenceDetails");

const show_main_page = () => {
    conferecePage.style.display = "block";
    conferenceDetailes.style.display = "none";
};

const show_details_page = () => {
    conferecePage.style.display = "none";
    conferenceDetailes.style.display = "block";
};