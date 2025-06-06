const introScreen = document.getElementById("introScreen");
const mainScreen = document.getElementById("mainScreen");
const footer = document.getElementById("footer");
const music = document.getElementById("bgMusic");

introScreen.addEventListener("click", () => {
  introScreen.style.opacity = "0";

  setTimeout(() => {
    introScreen.style.display = "none";
    mainScreen.classList.remove("hidden");

    requestAnimationFrame(() => {
      mainScreen.style.opacity = "1";
      footer.classList.add("show"); // ✅ Keep footer always showing
    });

    music.play();
  }, 1500);
});
