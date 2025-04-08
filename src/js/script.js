const currentPage = {
    card01: 0,
    card02: 0,
    cardMobile: 0
};
const cardsPerPage = {
    mobile: 2,
    desktop: 5
};
const container01 = document.getElementById("cards-container-1");
const container02 = document.getElementById("cards-container-2");
const containerMobile = document.getElementById("cards-container-mobile");
const navbarButton = document.querySelector(".navbar-button");
const searchFormIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".container-search");
const searchFormIconMobile = document.querySelector(".search-icon-mobile");
const searchFormMobile = document.querySelector(".container-search-form-mobile");

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

    } else {
        icon.setAttribute("src", "../../assets/img/icons-payment-mobile.svg");
        icon.setAttribute("alt", "icone de opções de pagamento");
        
        iconPaymentMethod.appendChild(icon);
                
    }
}


const totalPagesDesktop = Math.ceil(products.length / cardsPerPage.desktop);
const totalPagesMobile = Math.ceil(products.length / cardsPerPage.mobile);;


const generateCardsMobile = () => {
    containerMobile.innerHTML = "";
    const start = currentPage.cardMobile * cardsPerPage.mobile;
    const end = start + cardsPerPage.mobile;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container-mobile");  
        card.innerHTML = `
            <div class="new-title-product-mobile">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container-mobile">
                <div>
                    <p class="old-price-mobile">${product.oldPrice}</p>
                    <p class="price-mobile">${product.price}</p>
                </div>
                <div class="price-off-mobile">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price-mobile">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy-mobile">Comprar</button>
        `;
        containerMobile.appendChild(card);
    });
};

const generateCards01 = () => {
    container01.innerHTML = "";
    const start = currentPage.card01 * cardsPerPage.desktop;
    const end = start + cardsPerPage.desktop;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container-card01");  
        card.innerHTML = `
            <div class="new-title-product-card01">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container-card01">
                <div>
                    <p class="old-price-card01">${product.oldPrice}</p>
                    <p class="price-card01">${product.price}</p>
                </div>
                <div class="price-off-card01">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price-card01">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy-card01">Comprar</button>
        `;
        container01.appendChild(card);
    });
};

const generateCards02 = () => {
    container02.innerHTML = "";
    const start = currentPage.card02 * cardsPerPage.desktop;
    const end = start + cardsPerPage.desktop;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card-container-card02");  
        card.innerHTML = `
            <div class="new-title-product-card02">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3><span>&lt;h3&gt;</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit<span>&lt;/h3&gt;</span></h3>
            <div class="price-container-card02">
                <div>
                    <p class="old-price-card02">${product.oldPrice}</p>
                    <p class="price-card02">${product.price}</p>
                </div>
                <div class="price-off-card02">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price-card02">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy-card02">Comprar</button>
        `;
        container02.appendChild(card);
    });
};

const generatePagination01 = () => {
    const paginationContainer = document.getElementById("pagination-container-1");
    const totalPages = Math.ceil(products.length / cardsPerPage.desktop);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage.card01) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage.card01 = i;
            generateCards01();
            generatePagination01();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const generatePagination02 = () => {
    const paginationContainer = document.getElementById("pagination-container-2");
    const totalPages = Math.ceil(products.length / cardsPerPage.desktop);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage.card02) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage.card02 = i;
            generateCards02();
            generatePagination02();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const generatePaginationMobile = () => {
    const paginationContainer = document.getElementById("pagination-container-mobile");
    const totalPages = Math.ceil(products.length / cardsPerPage.mobile);
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.classList.add("pagination-bullet");
        pageButton.textContent = "•";
        pageButton.setAttribute("data-page", i);

        if (i === currentPage.cardMobile) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            currentPage.cardMobile = i;
            generateCardsMobile();
            generatePaginationMobile();
        });

        paginationContainer.appendChild(pageButton);
    }
};

const updateNavigationButtons = () => {
    const prevButton = document.querySelector(".prev-1");
    const nextButton = document.querySelector(".next-1");

    prevButton.disabled = currentPage.card01 === 0;
    nextButton.disabled = currentPage.card01 === totalPagesDesktop - 1;
};

const updateNavigationButtons02 = () => {
    const prevButton = document.querySelector(".prev-2");
    const nextButton = document.querySelector(".next-2");

    prevButton.disabled = currentPage.card02 === 0;
    nextButton.disabled = currentPage.card02 === totalPagesDesktop - 1;
};

const updateNavigationButtonsMobile = () => {
    const prevButton = document.querySelector(".prev-mobile");
    const nextButton = document.querySelector(".next-mobile");

    prevButton.disabled = currentPage.cardMobile === 0;
    nextButton.disabled = currentPage.cardMobile === totalPagesMobile - 1;
};


function prevPage01() {
    if (currentPage.card01 > 0) {
        currentPage.card01--;
        generateCards01();
        generatePagination01();
        updateNavigationButtons();
        
    }
};

function nextPage01() {
    if (currentPage.card01 < totalPagesDesktop - 1) {
        currentPage.card01++;
        generateCards01();
        generatePagination01();
        updateNavigationButtons();
    }
};

function prevPage02() {
    if (currentPage.card02 > 0) {
        currentPage.card02--;
        generateCards02();
        generatePagination02();
        updateNavigationButtons02();
        
    }
};

function nextPage02() {
    if (currentPage.card02 < totalPagesDesktop - 1) {
        currentPage.card02++;
        generateCards02();
        generatePagination02();
        updateNavigationButtons02();
    }
};

function prevPageMobile() {
    if (currentPage.cardMobile > 0) {
        currentPage.cardMobile--;
        generateCardsMobile();
        generatePaginationMobile();
        updateNavigationButtonsMobile();
        
    }
};

function nextPageMobile() {
    if (currentPage.cardMobile < totalPagesMobile - 1) {
        currentPage.cardMobile++;
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

function toggleDropdownMobile() {
    const Dropdown = document.querySelector(".toggleDropdown-mobile");
    
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
});

searchFormMobile.addEventListener("submit", (ev) => {
    ev.preventDefault();

        const searchInput = document.getElementById("search-input-mobile");
        const result = document.querySelector(".result-search-mobile");

        result.innerHTML = `
            <p>Você Buscou por: ${searchInput.value}</p>
        `;
});


searchFormIconMobile.addEventListener("click", (ev) => {
    ev.preventDefault();

    searchFormMobile.dispatchEvent(new Event("submit"));
});

navbarButton.addEventListener("click", toggleDropdown);


function showAccordionInstitutional() {
    const selectInstitutional = document.querySelector(".select-institucional");
    const optionsAccordion = document.querySelector(".optionsAccordionInstitutional");

    if(optionsAccordion.classList.contains("active")) {
        optionsAccordion.classList.remove("active");
        optionsAccordion.style.display = "none";
        selectInstitutional.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;

    } else {
        selectInstitutional.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.5L6 1.5L11 6.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;
        optionsAccordion.classList.add("active");
        optionsAccordion.style.display = "flex";
    }

}

function showAccordionCentral() {
    const selectCentral = document.querySelector(".select-central");
    const optionsAccordion = document.querySelector(".optionsAccordionCentral");

    if(optionsAccordion.classList.contains("active")) {
        optionsAccordion.classList.remove("active");
        optionsAccordion.style.display = "none";
        selectCentral.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;

    } else {
        selectCentral.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.5L6 1.5L11 6.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;
        optionsAccordion.classList.add("active");
        optionsAccordion.style.display = "flex";
    }
}

function showAccordionAtendimento() {
    const selectAtendimento = document.querySelector(".select-atendimento");
    const optionsAccordion = document.querySelector(".optionsAccordionAtendimento");

    if(optionsAccordion.classList.contains("active")) {
        optionsAccordion.classList.remove("active");
        optionsAccordion.style.display = "none";
        selectAtendimento.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;

    } else {
        selectAtendimento.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.5L6 1.5L11 6.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;
        optionsAccordion.classList.add("active");
        optionsAccordion.style.display = "flex";
    }
}



document.addEventListener("DOMContentLoaded", () => {
    widthScreen();
    generateCardsMobile();
    generatePaginationMobile();
    generateCards01();
    generatePagination01();
    generateCards02();
    generatePagination02();

});
