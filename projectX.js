let image2_link = ["project2_a.jpg", "project2_b.jpg", "project2_c.jpg"]
let image3_link = ["project3_a.jpg", "project3_b.jpg", "project3_c.jpg"]
let image4_link = ["project4_a.jpg", "project4_b.jpg", "project4_c.jpg"]
let image5_link = ["project5_a.jpg", "project5_b.jpg", "project5_c.jpg"]
let image6_link = ["project6_a.jpg", "project6_b.jpg", "project6_c.jpg"]

let page_number = window.location.search;

let projectnaam = document.getElementById("projectnaam");
let projectcontainera = document.getElementById("projectcontainera");
let projectcontainerb = document.getElementById("projectcontainerb");
let projectcontainerc = document.getElementById("projectcontainerc");

if (page_number == "?2") {
    projectnaam.innerText = "Mercedes Empanada Truck";
    projectcontainera.src = image2_link[0];
    projectcontainerb.src = image2_link[1];
    projectcontainerc.src = image2_link[2];
} else if (page_number == "?3") {
    projectnaam.innerText = "Vintage Coffee Truck";
    projectcontainera.src = image3_link[0];
    projectcontainerb.src = image3_link[1];
    projectcontainerc.src = image3_link[2];
} else if (page_number == "?4") {
    projectnaam.innerText = "Beer Bar Container";
    projectcontainera.src = image4_link[0];
    projectcontainerb.src = image4_link[1];
    projectcontainerc.src = image4_link[2];
} else if (page_number == "?5") {
    projectnaam.innerText = "Vintage Champaign Trailer";
    projectcontainera.src = image5_link[0];
    projectcontainerb.src = image5_link[1];
    projectcontainerc.src = image5_link[2];
} else if (page_number == "?6") {
    projectnaam.innerText = "Grill Bar Airstream";
    projectcontainera.src = image6_link[0];
    projectcontainerb.src = image6_link[1];
    projectcontainerc.src = image6_link[2];
}