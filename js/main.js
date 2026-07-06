document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll(
    ".mobile-nav a, .mobile-actions a",
  );

  navToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    const expanded = mobileMenu.classList.contains("open");
    navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", !expanded);
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  const planCards = document.querySelectorAll(".plan-card");
  const planButtons = document.querySelectorAll(".select-plan");
  let activePlanIndex = 2;
  function setActivePlan(index) {
    planCards.forEach((card) => {
      card.classList.toggle("active", Number(card.dataset.planIndex) === index);
    });
  }
  planButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      setActivePlan(index);
    });
  });
  setActivePlan(activePlanIndex);

  const track = document.getElementById("testimonialTrack");
  const slides = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".testimonial-dot");
  const prevButton = document.getElementById("testimonialPrev");
  const nextButton = document.getElementById("testimonialNext");
  let currentSlide = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 24;
    track.style.transform = `translateX(${currentSlide * -slideWidth}px)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      updateCarousel();
    });
  });

  updateCarousel();

  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    marker.addEventListener("mouseenter", function () {
      markers.forEach((m) => m.classList.remove("active"));
      this.classList.add("active");
    });
  });

  document
    .querySelector(".network-map")
    .addEventListener("mouseleave", function () {
      markers.forEach((m) => m.classList.remove("active"));
    });
});
