// FILTRO POR CATEGORIA
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        productCards.forEach(card => {
            const category = card.querySelector(".cat").textContent.toLowerCase();
            card.parentElement.style.display = filter === "all" || category.includes(filter) ? "block" : "none";
        });
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// BUSCA INTELIGENTE
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

function searchProducts() {
    const query = searchInput.value.toLowerCase();
    productCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.parentElement.style.display = text.includes(query) ? "block" : "none";
    });
}

searchButton.addEventListener("click", searchProducts);
searchInput.addEventListener("keyup", searchProducts);

// ANIMAÇÃO SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".scroll").forEach(el => observer.observe(el));
