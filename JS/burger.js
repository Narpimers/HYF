/* ham-menu */
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/* Закрытие меню при клике на ссылку */
const menuLinks = offScreenMenu.querySelectorAll("a"); // Получаем все ссылки внутри бургер-меню

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Закрываем меню
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});

/* auto-typing */
const typed = new Typed(".auto-type", {
  strings: ["mission", "dream", "goal"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

/* Go top кнопка */
const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const offset = window.pageYOffset; // Исправлена опечатка
  const coords = document.documentElement.clientHeight;

  if (offset > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
}

/* Автоплей видео */
const videoIframe = document.getElementById('video1');

// Создаем наблюдатель для отслеживания видимости видео
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let src = videoIframe.src;
            if (!src.includes('autoplay=1')) {
                src = src.includes('?') ? src + '&autoplay=1&mute=1' : src + '?autoplay=1&mute=1';
                videoIframe.src = src;
            }
        } else {
            let src = videoIframe.src;
            src = src.replace('&autoplay=1', '').replace('?autoplay=1', '');
            src = src.replace('&mute=1', '').replace('?mute=1', '');
            videoIframe.src = src;
        }
    });
}, { threshold: 0.5 }); // Запускается, если видно хотя бы 50% видео

// Наблюдаем за видео
observer.observe(videoIframe);

