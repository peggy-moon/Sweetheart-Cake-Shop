/* FAQ */
const faqSearchInput = document.getElementById("faq-search-input");
const filterTabs = document.querySelectorAll(".filter-tab");
const faqItems = document.querySelectorAll(".faq-item");
const faqResultCount = document.getElementById("faq-result-count");

if (faqSearchInput && faqResultCount && faqItems.length > 0) {

    let currentCategory = "all";

    function updateFaqList() {
        const keyword = faqSearchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        faqItems.forEach((item) => {
            const itemCategory = item.dataset.category;
            const itemText = item.textContent.toLowerCase();

            const matchCategory =
                currentCategory === "all" || currentCategory === itemCategory;

            const matchKeyword =
                keyword === "" || itemText.includes(keyword);

            if (matchCategory && matchKeyword) {
                item.classList.remove("is-hidden");
                visibleCount++;
            } else {
                item.classList.add("is-hidden");
                item.classList.remove("is-open");
            }
        });

        faqResultCount.textContent =
            keyword ? `找到 ${visibleCount} 筆相關問題` : "";
    }

    filterTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            currentCategory = tab.dataset.category;
            updateFaqList();
        });
    });

    faqSearchInput.addEventListener("input", updateFaqList);

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("is-open");
        });
    });
}