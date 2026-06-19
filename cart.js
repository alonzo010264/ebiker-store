/* ==========================================
   E-BIKER PERFORMANCE - CART PAGE APPLICATION
   ========================================== */

// --- PRODUCT DATABASE ---
const PRODUCTS = [
    // --- Enduro Eléctrica ---
    {
        id: 1,
        name: "EBP 805 PRO",
        tag: "MÁS POPULAR",
        tagClass: "popular",
        price: 2899.00,
        originalPrice: null,
        autonomy: 120,
        speed: 80,
        type: "Enduro Eléctrica",
        rating: 4.8,
        reviews: 124,
        image: "assets/ebp-805-pro.png",
        colorClass: "",
        description: "Diseñada para dominar senderos difíciles con máxima maniobrabilidad. La EBP 805 Pro combina un motor de 6000W ultra silencioso con suspensión de alto recorrido ajustable para una experiencia enduro sin comparación."
    },
    {
        id: 2,
        name: "EBP 805 LITE",
        tag: "-10%",
        tagClass: "discount",
        price: 1799.00,
        originalPrice: 1999.00,
        autonomy: 90,
        speed: 70,
        type: "Enduro Eléctrica",
        rating: 4.5,
        reviews: 63,
        image: "assets/ebp-805-lite.png",
        colorClass: "",
        description: "La entrada ideal al mundo de las motos eléctricas de alto rendimiento. Ligera, ágil y optimizada, es perfecta para trayectos rápidos y recreación off-road de fin de semana."
    },
    {
        id: 3,
        name: "EBP HUNTER",
        tag: "NUEVO",
        tagClass: "new",
        price: 2099.00,
        originalPrice: null,
        autonomy: 110,
        speed: 80,
        type: "Enduro Eléctrica",
        rating: 4.6,
        reviews: 44,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-hunter",
        description: "Equipada con neumáticos de taco agresivo y batería reforzada para expediciones largas de caza u observación de campo en silencio total."
    },
    {
        id: 4,
        name: "EBP RANGER",
        tag: "",
        tagClass: "",
        price: 2499.00,
        originalPrice: null,
        autonomy: 130,
        speed: 85,
        type: "Enduro Eléctrica",
        rating: 4.7,
        reviews: 31,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-bronze",
        description: "La compañera ideal para guardabosques y patrullaje rural. Resistente al agua, al barro y equipada con parrilla de carga trasera de serie."
    },
    {
        id: 10,
        name: "EBP STORM X",
        tag: "MÁS VENDIDO",
        tagClass: "popular",
        price: 2299.00,
        originalPrice: null,
        autonomy: 100,
        speed: 90,
        type: "Cross / Off Road",
        rating: 4.8,
        reviews: 142,
        image: "assets/ebp-storm-x.png",
        colorClass: "",
        description: "Pura potencia instantánea para circuitos de motocross. Con una aceleración explosiva de 0 a 50 km/h en 2.1 segundos y chasis de aleación ultraligero."
    },
    {
        id: 20,
        name: "EBP FORCE Off-Road",
        price: 2590.00,
        type: "Cross / Off Road",
        rating: 4.5,
        reviews: 24,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-hunter"
    },
    {
        id: 21,
        name: "EBP TRAIL R",
        price: 3199.00,
        type: "Trail / Aventura",
        rating: 4.9,
        reviews: 76,
        image: "assets/ebp-trail-r.png",
        colorClass: ""
    },
    {
        id: 22,
        name: "EBP ADVENTURE",
        price: 2699.00,
        type: "Trail / Aventura",
        rating: 4.7,
        reviews: 28,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-adventure"
    },
    // --- ACCESORIOS (Para "También te puede interesar") ---
    {
        id: 101,
        name: "Casco Off Road E-Biker",
        price: 199.00,
        type: "Accesorio",
        rating: 4.8,
        reviews: 56,
        image: "assets/ebp-helmet.png",
        colorClass: "",
        description: "Casco protector de alta resistencia homologado para motocross y off-road."
    },
    {
        id: 102,
        name: "Guantes de Protección",
        price: 49.00,
        type: "Accesorio",
        rating: 4.7,
        reviews: 32,
        image: "assets/ebp-gloves.png",
        colorClass: "",
        description: "Guantes de cuero sintético y protecciones de fibra de carbono en nudillos."
    },
    {
        id: 103,
        name: "Cargador Rápido 72V",
        price: 199.00,
        type: "Accesorio",
        rating: 4.9,
        reviews: 18,
        image: "assets/ebp-charger.png",
        colorClass: "",
        description: "Carga rápida inteligente para reducir a la mitad el tiempo de carga oficial."
    },
    {
        id: 104,
        name: "Kit de Llantas Off Road",
        price: 299.00,
        type: "Accesorio",
        rating: 4.8,
        reviews: 24,
        image: "assets/ebp-tires.png",
        colorClass: "",
        description: "Par de llantas de alta tracción y compuesto blando para terrenos rocosos."
    },
    {
        id: 105,
        name: "Protector de Manos",
        price: 59.00,
        type: "Accesorio",
        rating: 4.6,
        reviews: 15,
        image: "assets/ebp-guards.png",
        colorClass: "",
        description: "Defensas aerodinámicas para proteger las manetas e impedir impactos en las manos."
    },
    // --- BATERÍAS ---
    {
        id: 201,
        name: "Batería de Litio 72V 40Ah",
        price: 899.00,
        type: "Batería",
        rating: 4.9,
        reviews: 42,
        image: "fa-battery-full",
        isIcon: true,
        colorClass: "",
        description: "Batería de celdas de litio de alta densidad para máxima autonomía. Compatible con modelos EBP 805 PRO, STORM X y TRAIL R."
    }
];

// --- STATE ---
let cart = [];

// --- DOM ELEMENTS ---
const cartPageItemsList = document.getElementById('cartPageItemsList');
const cartPageEmptyState = document.getElementById('cartPageEmptyState');
const cartLeftFooter = document.getElementById('cartLeftFooter');
const cartRightCol = document.getElementById('cartRightCol');
const cartBadge = document.getElementById('cartBadge');

const pageSubtotal = document.getElementById('pageSubtotal');
const pageShipping = document.getElementById('pageShipping');
const pageTotal = document.getElementById('pageTotal');
const subtotalLabel = document.getElementById('subtotalLabel');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtnPage = document.getElementById('checkoutBtnPage');

const calcToggleBtn = document.getElementById('calcToggleBtn');
const calcContent = document.getElementById('calcContent');
const zipCodeInput = document.getElementById('zipCodeInput');
const zipCalcBtn = document.getElementById('zipCalcBtn');
const calcResult = document.getElementById('calcResult');

const suggestionsGrid = document.getElementById('suggestionsGrid');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderCartPage();
    renderSuggestions();
    setupEventListeners();
});

// --- LOAD / SAVE ---
function loadCartFromStorage() {
    const storedCart = localStorage.getItem("ebiker_cart");
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
        } catch (e) {
            cart = [];
        }
    }
    // Update badge in header
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

function saveCartToStorage() {
    localStorage.setItem("ebiker_cart", JSON.stringify(cart));
    // Update badge in header
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

// --- RENDER CART LIST ---
function renderCartPage() {
    if (cart.length === 0) {
        // Show empty state
        cartPageItemsList.style.display = 'none';
        cartLeftFooter.style.display = 'none';
        cartRightCol.style.display = 'none';
        cartPageEmptyState.style.display = 'flex';
        return;
    }

    // Show filled state
    cartPageEmptyState.style.display = 'none';
    cartPageItemsList.style.display = 'block';
    cartLeftFooter.style.display = 'flex';
    cartRightCol.style.display = 'block';

    cartPageItemsList.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        
        // Dynamic detail info for products
        let detailsHTML = '';
        if (item.id === 1) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Color: Blanco Naranja</span>
                    <span class="color-indicator-dot white-orange"></span>
                </div>
                <div class="item-meta-row">
                    <span>Autonomía: 120 km</span>
                </div>
            `;
        } else if (item.id === 10) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Color: Negro Naranja</span>
                    <span class="color-indicator-dot black-orange"></span>
                </div>
                <div class="item-meta-row">
                    <span>Autonomía: 100 km</span>
                </div>
            `;
        } else if (item.id === 201) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Compatibilidad: EBP 805 PRO / STORM X / TRAIL R</span>
                </div>
            `;
        } else if (item.type === 'Accesorio' || item.isIcon) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Garantía oficial: 2 años</span>
                </div>
            `;
        } else {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Autonomía: ${item.autonomy || 'N/A'} km</span>
                </div>
            `;
        }

        // Handle Image vs Icon
        let imgHTML = '';
        if (item.isIcon) {
            imgHTML = `<div class="cart-page-item-icon-box"><i class="fa-solid ${item.image}"></i></div>`;
        } else {
            imgHTML = `<img src="${item.image}" alt="${item.name}" class="cart-page-item-img ${item.colorClass || ''}">`;
        }

        return `
            <div class="cart-page-row" data-id="${item.id}">
                <!-- Product block -->
                <div class="cart-product-block">
                    <div class="cart-item-image-container">
                        ${imgHTML}
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        ${detailsHTML}
                    </div>
                </div>

                <!-- Price -->
                <div class="cart-price-block">
                    <span class="label-mobile">Precio: </span>
                    <span class="price-val">$${formatNumber(item.price)}</span>
                </div>

                <!-- Qty selector -->
                <div class="cart-qty-block">
                    <span class="label-mobile">Cantidad: </span>
                    <div class="qty-selector-group">
                        <button class="qty-btn-minus" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="qty-display-val">${item.quantity}</span>
                        <button class="qty-btn-plus" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>

                <!-- Total -->
                <div class="cart-total-block">
                    <span class="label-mobile">Total: </span>
                    <span class="total-val orange-text">$${formatNumber(itemTotal)}</span>
                </div>

                <!-- Remove button -->
                <div class="cart-remove-block">
                    <button class="btn-remove-item" onclick="removePageItem(${item.id})" aria-label="Eliminar artículo">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Update Summary Details
    updateSummary();
}

// --- UPDATE SUMMARY ---
function updateSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Free shipping above 300
    const shippingCost = subtotal > 300 || subtotal === 0 ? 0 : 25;
    const total = subtotal + shippingCost;

    subtotalLabel.textContent = `Subtotal (${totalItems} artículo${totalItems !== 1 ? 's' : ''})`;
    pageSubtotal.textContent = `$${formatNumber(subtotal)}`;
    
    if (shippingCost === 0) {
        pageShipping.textContent = "Gratis";
        pageShipping.classList.add('green-text');
    } else {
        pageShipping.textContent = `$${formatNumber(shippingCost)}`;
        pageShipping.classList.remove('green-text');
    }

    pageTotal.textContent = `$${formatNumber(total)}`;
}

// --- RENDER SUGGESTIONS (También te puede interesar) ---
function renderSuggestions() {
    // We select 5 specific products to display
    const suggestionsIds = [101, 102, 103, 104, 105];
    const suggItems = suggestionsIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    suggestionsGrid.innerHTML = suggItems.map(item => {
        let visualHTML = '';
        if (item.isIcon) {
            visualHTML = `<div class="sugg-icon-box"><i class="fa-solid ${item.image}"></i></div>`;
        } else {
            visualHTML = `<img src="${item.image}" alt="${item.name}">`;
        }

        return `
            <div class="sugg-card">
                <div class="sugg-image-box">
                    ${visualHTML}
                </div>
                <div class="sugg-details">
                    <h4 class="sugg-name">${item.name}</h4>
                    <div class="sugg-price-row">
                        <span class="sugg-price">$${formatNumber(item.price)}</span>
                    </div>
                    <div class="sugg-rating-row">
                        <i class="fa-solid fa-star"></i>
                        <span>${item.rating} (${item.reviews})</span>
                    </div>
                    <button class="btn btn-outline btn-add-sugg" onclick="addSuggestedToCart(${item.id})">
                        Agregar al carrito <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// --- STATE ACTIONS ---
window.changeQuantity = function(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    
    saveCartToStorage();
    renderCartPage();
};

window.removePageItem = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCartPage();
    showToast("Producto eliminado del carrito.");
};

window.addSuggestedToCart = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    renderCartPage();
    showToast(`¡${product.name} añadido al carrito!`);
};

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Clear cart button
    clearCartBtn.addEventListener('click', () => {
        if (confirm("¿Estás seguro de que deseas vaciar tu carrito de compras?")) {
            cart = [];
            saveCartToStorage();
            renderCartPage();
            showToast("Tu carrito ha sido vaciado.");
        }
    });

    // Shipping Calculator toggle
    calcToggleBtn.addEventListener('click', () => {
        calcToggleBtn.classList.toggle('active');
        calcContent.classList.toggle('open');
    });

    // Postal code calculator click
    zipCalcBtn.addEventListener('click', () => {
        const zip = zipCodeInput.value.trim();
        if (!zip) {
            calcResult.innerHTML = `<span style="color: var(--tag-discount)">Por favor, ingresa un código postal válido.</span>`;
            return;
        }

        zipCalcBtn.disabled = true;
        calcResult.innerHTML = `<i class="fa-solid fa-spinner fa-spin orange-text"></i> Calculando costo de envío...`;

        setTimeout(() => {
            zipCalcBtn.disabled = false;
            // 70% chance of free shipping, 30% chance of standard flat rate
            const isFree = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) > 300;
            if (isFree) {
                calcResult.innerHTML = `<span class="green-text"><i class="fa-solid fa-circle-check"></i> ¡Envío Gratis para tu zona con este pedido!</span>`;
            } else {
                calcResult.innerHTML = `<span style="color: var(--text-secondary)"><i class="fa-solid fa-truck-fast"></i> Costo estimado para CP ${zip}: $25.00 USD</span>`;
            }
        }, 1200);
    });

    // Checkout button Stripe Simulator
    checkoutBtnPage.addEventListener('click', () => {
        if (cart.length === 0) return;

        checkoutBtnPage.disabled = true;
        checkoutBtnPage.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> PROCESANDO PAGO CON STRIPE...`;

        setTimeout(() => {
            showToast("¡Pago procesado con Stripe correctamente!");
            
            setTimeout(() => {
                cart = [];
                saveCartToStorage();
                renderCartPage();
                
                checkoutBtnPage.disabled = false;
                checkoutBtnPage.innerHTML = `<i class="fa-solid fa-lock"></i> Proceder al pago`;

                alert("🎉 ¡Simulación de pago exitosa!\n\nGracias por su compra en E-BIKER Performance. Su pedido ha sido registrado a través del sandbox seguro de Stripe.");
            }, 1200);
        }, 2000);
    });

    // Logo click in header redirects correctly
    document.querySelector('.logo-area').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}

// --- UTILITIES ---
function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
