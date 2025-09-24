const sections = document.querySelectorAll("section, footer");
const progressBars = document.querySelectorAll(".progress-bar");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("show");
    }
  });

  progressBars.forEach(bar => {
    const boxTop = bar.getBoundingClientRect().top;
    if (boxTop < window.innerHeight * 0.9) {
      bar.style.width = bar.innerText;
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);