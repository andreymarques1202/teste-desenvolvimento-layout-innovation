document.addEventListener("DOMContentLoaded", () => {
    const commonSwiperConfig = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    };

    const initSwipers = () => {
        const swiperElements = [
            { id: 'cards-container-1', instance: null },
            { id: 'cards-container-2', instance: null },
            { id: 'cards-container-mobile', instance: null }
        ];

        swiperElements.forEach(swiper => {
            const element = document.getElementById(swiper.id);
            if (element) {
                if (!element.querySelector('.swiper-wrapper')) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'swiper-wrapper';
                    element.appendChild(wrapper);
                }
                
                swiper.instance = new Swiper(`#${swiper.id}`, commonSwiperConfig);
                generateCards(element, swiper.id.includes('mobile') ? 'mobile' : 'desktop');
            }
        });

        return swiperElements;
    };

    const swipers = initSwipers();

    widthScreen();
    setupEventListeners();
});

function generateCards(container, device) {
    const wrapper = container.querySelector('.swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("swiper-slide");
        
        const cardClass = device === 'mobile' ? 'mobile-card' : 'desktop-card';
        card.classList.add(cardClass);
        
        card.innerHTML = `
            <div class="new-title-product-${device}">
                <p>Novo</p>
            </div>
            <img src="${product.image}" alt="Foto do produto">
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
            <div class="price-container-${device}">
                <div>
                    <p class="old-price-${device}">${product.oldPrice}</p>
                    <p class="price-${device}">${product.price}</p>
                </div>
                <div class="price-off-${device}">
                    <p>${product.discount} OFF</p>
                </div>
            </div>
            <p class="option-price-${device}">Ou em até <span>10x de ${product.price}</span></p>
            <button class="button-buy-${device}">Comprar</button>
        `;
        
        wrapper.appendChild(card);
    });
}

function setupEventListeners() {
    const navbarButton = document.querySelector(".navbar-button");
    const searchFormIcon = document.querySelector(".search-icon");
    const searchForm = document.querySelector(".container-search");
    const searchFormIconMobile = document.querySelector(".search-icon-mobile");
    const searchFormMobile = document.querySelector(".container-search-form-mobile");
    
    if (navbarButton) navbarButton.addEventListener("click", toggleDropdown);
    if (searchForm) searchForm.addEventListener("submit", handleSearchSubmit);
    if (searchFormIcon) searchFormIcon.addEventListener("click", triggerSearchSubmit);
    if (searchFormMobile) searchFormMobile.addEventListener("submit", handleMobileSearchSubmit);
    if (searchFormIconMobile) searchFormIconMobile.addEventListener("click", triggerMobileSearchSubmit);
    
    const accordionTriggers = {
        institutional: document.querySelector(".select-institucional"),
        central: document.querySelector(".select-central"),
        atendimento: document.querySelector(".select-atendimento")
    };
    
    if (accordionTriggers.institutional) {
        accordionTriggers.institutional.addEventListener("click", () => toggleAccordion("institutional"));
    }
    if (accordionTriggers.central) {
        accordionTriggers.central.addEventListener("click", () => toggleAccordion("central"));
    }
    if (accordionTriggers.atendimento) {
        accordionTriggers.atendimento.addEventListener("click", () => toggleAccordion("atendimento"));
    }
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-mobile');
        if (header) {
            header.classList.toggle('container-navFixed', window.scrollY >= 1);
        }
    });
}

function toggleDropdown() {
    const Dropdown = document.querySelector(".toggleDropdown");
    navbarButton.classList.toggle("active");
    Dropdown.style.display = navbarButton.classList.contains("active") ? "flex" : "none";
}

function toggleDropdownMobile() {
    const Dropdown = document.querySelector(".toggleDropdown-mobile");
    navbarButton.classList.toggle("active");
    Dropdown.style.display = navbarButton.classList.contains("active") ? "flex" : "none";
}

function handleSearchSubmit(ev) {
    ev.preventDefault();
    const searchInput = document.getElementById("search-input");
    const result = document.querySelector(".result-search");
    if (result && searchInput) {
        result.innerHTML = `<p>Você Buscou por: ${searchInput.value}</p>`;
    }
}

function triggerSearchSubmit(ev) {
    ev.preventDefault();
    const event = new Event("submit");
    searchForm.dispatchEvent(event);
}

function handleMobileSearchSubmit(ev) {
    ev.preventDefault();
    const searchInput = document.getElementById("search-input-mobile");
    const result = document.querySelector(".result-search-mobile");
    if (result && searchInput) {
        result.innerHTML = `<p>Você Buscou por: ${searchInput.value}</p>`;
    }
}

function triggerMobileSearchSubmit(ev) {
    ev.preventDefault();
    const event = new Event("submit");
    searchFormMobile.dispatchEvent(event);
}

function toggleAccordion(type) {
    const selectors = {
        institutional: {
            element: ".select-institucional",
            content: ".optionsAccordionInstitutional"
        },
        central: {
            element: ".select-central",
            content: ".optionsAccordionCentral"
        },
        atendimento: {
            element: ".select-atendimento",
            content: ".optionsAccordionAtendimento"
        }
    };
    
    const selector = selectors[type];
    const element = document.querySelector(selector.element);
    const content = document.querySelector(selector.content);
    
    if (!element || !content) return;
    
    const isActive = content.classList.contains("active");
    
    Object.values(selectors).forEach(s => {
        const el = document.querySelector(s.element);
        const ct = document.querySelector(s.content);
        if (el && ct) {
            ct.classList.remove("active");
            ct.style.display = "none";
            el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;
        }
    });
    
    if (!isActive) {
        content.classList.add("active");
        content.style.display = "flex";
        element.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.5L6 1.5L11 6.5' stroke='%23005cff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`;
    }
}

function widthScreen() {
    const iconPaymentMethod = document.querySelector(".payments-method");
    if (!iconPaymentMethod) return;

    const icon = document.createElement("img");
    const isMobile = window.innerWidth <= 768;
    
    icon.setAttribute("src", `../../assets/img/icons-payment${isMobile ? '-mobile' : ''}.svg`);
    icon.setAttribute("alt", "icone de opções de pagamento");
    
    iconPaymentMethod.innerHTML = '';
    iconPaymentMethod.appendChild(icon);
}

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