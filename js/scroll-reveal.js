/* 滾動顯示動畫 */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});