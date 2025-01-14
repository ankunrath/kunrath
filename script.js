const mainTitle = document.getElementById("main-title");
const welcomeMessage = document.getElementById("welcome-message");

mainTitle.addEventListener("mouseenter", () => {
    welcomeMessage.classList.add("visible");
    welcomeMessage.classList.remove("hidden");
});

mainTitle.addEventListener("mouseleave", () => {
    welcomeMessage.classList.remove("visible");
    welcomeMessage.classList.add("hidden");
});