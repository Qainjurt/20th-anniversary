// Initialize AOS
AOS.init({
    duration: 1000,
});

// Countdown Timer
const countdown = () => {
    const eventDate = new Date('May 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        ${days} күн ${hours} сағат ${minutes} минут ${seconds} секунд
    `;

    if (timeLeft < 0) {
        document.getElementById('timer').innerHTML = 'Мерейтой басталды!';
    }
};
setInterval(countdown, 1000);

// Swiper Gallery
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

// Audio Control
const audio = document.getElementById('background-audio');
const audioControl = document.getElementById('audio-control');

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = 'Музыканы тоқтату';
    } else {
        audio.pause();
        audioControl.textContent = 'Музыканы ойнату';
    }
});
