function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelectorAll(".slideshow").forEach(initSlideshow);

function initSlideshow(slideshow) {
  let slideIndex = 1;

  const slides = slideshow.querySelectorAll(".mySlides");
  const dots = slideshow.querySelectorAll(".demo");
  const caption = slideshow.querySelector("#caption");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    caption.textContent = dots[slideIndex - 1].alt;
  }

  prev.addEventListener("click", () => showSlides(--slideIndex));
  next.addEventListener("click", () => showSlides(++slideIndex));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      slideIndex = i + 1;
      showSlides(slideIndex);
    });
  });

  showSlides(slideIndex);
}