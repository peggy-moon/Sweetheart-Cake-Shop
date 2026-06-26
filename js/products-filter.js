/* 商品分類篩選 */
(() => {
    const productFilterTabs = document.querySelectorAll(".filter-tab");
    const productCards = document.querySelectorAll(".product-card");

    productFilterTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const currentCategory = tab.dataset.category;

            productCards.forEach((card) => {
                const cardCategory = card.dataset.category;

                if (currentCategory === "all" || currentCategory === cardCategory) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }
            });
        });
    });
})();