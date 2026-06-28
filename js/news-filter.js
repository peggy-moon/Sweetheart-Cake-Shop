const newsFilterTabs = document.querySelectorAll(".filter-tab");
const newsCards = document.querySelectorAll(".news-card");

newsFilterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const currentCategory = tab.dataset.category;

        newsCards.forEach((card) => {
            const cardCategory = card.dataset.category;

            if (currentCategory === "all" || currentCategory === cardCategory) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});