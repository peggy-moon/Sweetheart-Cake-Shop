/* 統計數字計數器 */

const statNumbers = document.querySelectorAll(".stats-card__number");

function animateNumber(numberElement) {
    const target = Number(numberElement.dataset.target);
    const duration = 1600; // 動畫時間：1.6秒
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOut：前面快，後面慢慢停下來
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(target * easedProgress);

        numberElement.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            numberElement.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateNumber(entry.target);

        statsObserver.unobserve(entry.target);
    });
}, {
    threshold: 0.5
});

statNumbers.forEach((number) => {
    statsObserver.observe(number);
});