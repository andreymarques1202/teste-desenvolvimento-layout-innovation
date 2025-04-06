let currentPage = 0;
let cardsPerPage = 5;
const container01 = document.getElementById("cards-container-1");
const container02 = document.getElementById("cards-container-2");
const containerMobile = document.getElementById("cards-container-mobile");
const navbarButton = document.querySelector(".navbar-button");
const searchFormIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".container-search");

const products = [
    { oldPrice: "R$100,00", price: "R$79,90", discount: "10%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$90,00", discount: "25%", image: "./assets/img/image02.png" },
    { oldPrice: "R$150,00", price: "R$110,00", discount: "26%", image: "./assets/img/image02.png" },
    { oldPrice: "R$130,00", price: "R$95,00", discount: "27%", image: "./assets/img/image02.png" },
    { oldPrice: "R$150,00", price: "R$108,00", discount: "28%", image: "./assets/img/image02.png" },
    { oldPrice: "R$180,00", price: "R$69,90", discount: "61%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$90,00", discount: "25%", image: "./assets/img/image02.png" },
    { oldPrice: "R$190,00", price: "R$110,00", discount: "42%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$90,00", discount: "25%", image: "./assets/img/image02.png" },
    { oldPrice: "R$150,00", price: "R$50,00", discount: "67%", image: "./assets/img/image02.png" },
    { oldPrice: "R$100,00", price: "R$79,90", discount: "20%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$90,00", discount: "25%", image: "./assets/img/image02.png" },
    { oldPrice: "R$150,00", price: "R$110,00", discount: "26%", image: "./assets/img/image02.png" },
    { oldPrice: "R$230,00", price: "R$90,00", discount: "61%", image: "./assets/img/image02.png" },
    { oldPrice: "R$150,00", price: "R$110,00", discount: "26%", image: "./assets/img/image02.png" },
    { oldPrice: "R$280,00", price: "R$79,90", discount: "71%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$80,00", discount: "33%", image: "./assets/img/image02.png" },
    { oldPrice: "R$190,00", price: "R$110,00", discount: "42%", image: "./assets/img/image02.png" },
    { oldPrice: "R$120,00", price: "R$90,00", discount: "25%", image: "./assets/img/image02.png" },
    { oldPrice: "R$250,00", price: "R$110,00", discount: "56%", image: "./assets/img/image02.png" },
];

function widthScreen() {
    const iconPaymentMethod = document.querySelector(".payments-method");
    const icon = document.createElement("img");

    if(window.innerWidth > 768) {
        icon.setAttribute("src", "../../assets/img/icons-payment.svg");
        icon.setAttribute("alt", "icone de opções de pagamento");

        iconPaymentMethod.appendChild(icon);

        return cardsPerPage = 5;
    } else {
        icon.setAttribute("src", "../../assets/img/icons-payment-mobile.svg");
        icon.setAttribute("alt", "icone de opções de pagamento");
        
        iconPaymentMethod.appendChild(icon);
                
        return cardsPerPage = 2;
    }
}

const totalPages = Math.ceil(products.length / cardsPerPage);


const generateCardsMobile = () => {
    containerMobile.innerHTML = "";
    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container");  
        card.innerHTML = `
            <div class="new-title-product">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container">
                <div>
                    <p class="old-price">${product.oldPrice}</p>
                    <p class="price">${product.price}</p>
                </div>
                <div class="price-off">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy">Comprar</button>
        `;
        containerMobile.appendChild(card);
    });
};

const generateCards01 = () => {
    container01.innerHTML = "";
    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container");  
        card.innerHTML = `
            <div class="new-title-product">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container">
                <div>
                    <p class="old-price">${product.oldPrice}</p>
                    <p class="price">${product.price}</p>
                </div>
                <div class="price-off">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy">Comprar</button>
        `;
        container01.appendChild(card);
    });
};

const generateCards02 = () => {
    container02.innerHTML = "";
    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container");  
        card.innerHTML = `
            <div class="new-title-product">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container">
                <div>
                    <p class="old-price">${product.oldPrice}</p>
                    <p class="price">${product.price}</p>
                </div>
                <div class="price-off">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy">Comprar</button>
        `;
        container02.appendChild(card);
    });
};

const generatePagination01 = () => {
    const paginationContainer = document.getElementById("pagination-container-1");
    const totalPages = Math.ceil(products.length / cardsPerPage);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage = i;
            generateCards01();
            generatePagination01();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const generatePagination02 = () => {
    const paginationContainer = document.getElementById("pagination-container-2");
    const totalPages = Math.ceil(products.length / cardsPerPage);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage = i;
            generateCards02();
            generatePagination02();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const generatePaginationMobile = () => {
    const paginationContainer = document.getElementById("pagination-container-mobile");
    const totalPages = Math.ceil(products.length / cardsPerPage);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage = i;
            generateCardsMobile();
            generatePaginationMobile();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const updateNavigationButtons = () => {
    const prevButton = document.querySelector(".prev-1");
    const nextButton = document.querySelector(".next-1");

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
};

const updateNavigationButtons02 = () => {
    const prevButton = document.querySelector(".prev-2");
    const nextButton = document.querySelector(".next-2");

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
};

const updateNavigationButtonsMobile = () => {
    const prevButton = document.querySelector(".prev-mobile");
    const nextButton = document.querySelector(".next-mobile");

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
};


function prevPage01() {
    if (currentPage > 0) {
        currentPage--;
        generateCards01();
        generatePagination01();
        updateNavigationButtons();
        
    }
};

function nextPage01() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        generateCards01();
        generatePagination01();
        updateNavigationButtons();
    }
};

function prevPage02() {
    if (currentPage > 0) {
        currentPage--;
        generateCards02();
        generatePagination02();
        updateNavigationButtons02();
        
    }
};

function nextPage02() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        generateCards02();
        generatePagination02();
        updateNavigationButtons02();
    }
};

function prevPageMobile() {
    if (currentPage > 0) {
        currentPage--;
        generateCardsMobile();
        generatePaginationMobile();
        updateNavigationButtonsMobile();
        
    }
};

function nextPageMobile() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        generateCardsMobile();
        generatePaginationMobile();
        updateNavigationButtonsMobile();
    }
};

function toggleDropdown() {
    const Dropdown = document.querySelector(".toggleDropdown");
    
    if(navbarButton.classList.contains("active")) {
        navbarButton.classList.remove("active");
        Dropdown.style.display = "none";
    } else {
        navbarButton.classList.add("active");
        Dropdown.style.display = "flex";
    }

}

searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

        const searchInput = document.getElementById("search-input");
        const result = document.querySelector(".result-search");

        result.innerHTML = `
            <p>Você Buscou por: ${searchInput.value}</p>
        `;
});


searchFormIcon.addEventListener("click", (ev) => {
    ev.preventDefault();

    searchForm.dispatchEvent(new Event("submit"))
})

navbarButton.addEventListener("click", toggleDropdown);


document.addEventListener("DOMContentLoaded", () => {
    widthScreen();
    generateCardsMobile();
    generateCards01();
    generatePagination01();
    generateCards02();
    generatePagination02();

});
