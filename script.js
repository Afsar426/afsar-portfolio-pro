// ===============================
// 🌈 Progress Bar
// ===============================
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = `${scrolled}%`;
});

// ===============================
// 🔝 Back to Top Button
// ===============================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// ⌨️ Typing Effect
// ===============================
const textLines = [
  "AI & Data Science Developer",
  "Building Intelligent and Creative Systems",
  "Turning Data into Insightful Experiences"
];
let textIndex = 0, charIndex = 0, deleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (!typedText) return;

  const currentText = textLines[textIndex];
  typedText.textContent = currentText.substring(0, charIndex);

  if (!deleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    deleting = !deleting;
    if (!deleting) textIndex = (textIndex + 1) % textLines.length;
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ===============================
// 🎛️ Project Filter Buttons
// ===============================
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category.includes(category)) {
        card.style.display = "block";
        card.style.opacity = "1";
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
      }
    });
  });
});

// ===============================
// ✨ Scroll Reveal Animation
// ===============================
const sections = document.querySelectorAll(".section");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);

// ===============================
// 🌟 Lazy Loading Images
// ===============================
const lazyImages = document.querySelectorAll("img[loading='lazy']");
const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src || img.src;
      observer.unobserve(img);
    }
  });
});
lazyImages.forEach(img => imgObserver.observe(img));

// ===============================
// 💡 Neon Cursor Glow
// ===============================
const cursor = document.createElement("div");
cursor.id = "neon-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});