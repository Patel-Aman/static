let homePage = document.getElementById("homePage");
let puriPodcast = document.getElementById("puriPodcast");
let tedxPodcast = document.getElementById("tedxPodcast");
let sadhguruPodcast = document.getElementById("sadhguruPodcast");
let onPurposePodcast = document.getElementById("onPurposePodcast");

let podcasts = [puriPodcast, tedxPodcast, sadhguruPodcast, onPurposePodcast];

for (let podcast of podcasts) {
    podcast.style.display = "none";
}
homePage.style.display = "block";

const home_page = (ind) => {
    podcasts[ind].style.display = "none";
    homePage.style.display = "block";
};

const puri_page = () => {
    homePage.style.display = "none"
    puriPodcast.style.display = "block";
}   

const tedx_page = () => {
    homePage.style.display = "none";
    tedxPodcast.style.display = "block";
};   

const sadhguru_page = () => {
    homePage.style.display = "none";
    sadhguruPodcast.style.display = "block";
}   

const onPurpose_page = () => {
    homePage.style.display = "none";
    onPurposePodcast.style.display = "block";
};   
