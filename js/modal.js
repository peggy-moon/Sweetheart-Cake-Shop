// 取得 Modal 元素
const productModal = document.getElementById("product-modal");

if (productModal) {
    const modalOverlay = productModal.querySelector(".modal__overlay");
    const modalCloseBtn = productModal.querySelector(".modal__close");

    // 取得 Modal 裡面要被換資料的元素
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalSubtitle = document.getElementById("modal-subtitle");
    const modalSize = document.getElementById("modal-size");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const modalIngredients = document.getElementById("modal-ingredients");

    const modalBox = productModal.querySelector(".modal__content");

    // 取得所有可以打開 Modal 的商品卡片
    const productCards = document.querySelectorAll("[data-product]");

    // 開啟 Modal
    function openProductModal(productId) {
        const product = products[productId];

        if (!product) {
            console.warn(`找不到商品資料：${productId}`);
            return;
        }

        modalImage.src = product.image;
        modalImage.alt = product.imageAlt;

        modalTitle.textContent = product.title;
        modalSubtitle.textContent = product.subtitle;
        modalSize.textContent = product.size;
        modalPrice.textContent = `NT$ ${product.price}`;
        modalDescription.textContent = product.description;

        // 先清空成分區，避免上一次的資料留下來
        modalIngredients.innerHTML = "";

        product.ingredients.forEach((ingredient) => {
            const tag = document.createElement("span");

            tag.className = "tag tag--secondary--soft tag--text-tertiary";
            tag.textContent = ingredient;

            modalIngredients.appendChild(tag);
        });

        modalBox.scrollTop = 0;

        productModal.classList.add("is-open");
        productModal.setAttribute("aria-hidden", "false");

        // 開啟 Modal 後，背景不要跟著滾動
        document.body.style.overflow = "hidden";
    }

    // 關閉 Modal
    function closeProductModal() {
        productModal.classList.remove("is-open");
        productModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }

    // 點擊商品卡片，打開 Modal
    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            const productId = card.dataset.product;

            openProductModal(productId);
        });
    });

    // 點擊遮罩關閉
    modalOverlay.addEventListener("click", closeProductModal);

    // 點擊叉叉關閉
    modalCloseBtn.addEventListener("click", closeProductModal);

    // 按下 Esc 關閉
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && productModal.classList.contains("is-open")) {
            closeProductModal();
        }
    });
}
