const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const listItems = sidebar.querySelectorAll("li"); // Select all <li> elements within the sidebar

function toggleSidebar() {
    sidebar.classList.toggle("close");
    sidebar.classList.toggle("open");
}



const isMobile = window.innerWidth < 768;
if (isMobile) {
    sidebar.classList.add("close");
    toggle.style.display = "none"; // Hide the toggle button on mobile devices
} else {
    // Enable opening the sidebar when not on a mobile device
    toggle.addEventListener("click", toggleSidebar); // Call toggleSidebar when the button is clicked
}

// Check for overflow initially and on window resize
window.addEventListener("resize", checkOverflow);
window.addEventListener("load", checkOverflow);
