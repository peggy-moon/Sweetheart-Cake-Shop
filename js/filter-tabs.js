/* tab 分類按鈕 */

const filterGroups = document.querySelectorAll(".filter-tabs");

filterGroups.forEach((group) => {
    const tabs = group.querySelectorAll(".filter-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((button) => {
                button.classList.remove("is-active");
            });

            tab.classList.add("is-active");
        });
    });
});