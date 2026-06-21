/* ==========================================
   E-BIKER PERFORMANCE - CART PAGE APPLICATION
   ========================================== */

// --- PRODUCT DATABASE ---
const PRODUCTS = [
    // --- Enduro Eléctrica ---
    {
        id: 1,
        name: "EBP 805 PRO",
        tag: "MOST POPULAR",
        tagClass: "popular",
        price: 2899.00,
        originalPrice: null,
        autonomy: 120,
        speed: 80,
        type: "Electric Enduro",
        rating: 4.8,
        reviews: 124,
        image: "assets/ebp-805-pro.png",
        colorClass: "",
        description: "Designed to dominate difficult trails with maximum maneuverability. The EBP 805 Pro combines an ultra-silent 6000W motor with adjustable high-travel suspension for an unparalleled enduro experience."
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
        type: "Electric Enduro",
        rating: 4.5,
        reviews: 63,
        image: "assets/ebp-805-lite.png",
        colorClass: "",
        description: "The ideal entry to the world of high-performance electric motorcycles. Light, agile and optimized, it is perfect for quick trips and weekend off-road recreation."
    },
    {
        id: 3,
        name: "EBP HUNTER",
        tag: "NEW",
        tagClass: "new",
        price: 2099.00,
        originalPrice: null,
        autonomy: 110,
        speed: 80,
        type: "Electric Enduro",
        rating: 4.6,
        reviews: 44,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-hunter",
        description: "Equipped with aggressive knobby tires and reinforced battery for long hunting expeditions or field observation in total silence."
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
        type: "Electric Enduro",
        rating: 4.7,
        reviews: 31,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-bronze",
        description: "The ideal companion for park rangers and rural patrolling. Water-resistant, mud-resistant, and equipped with a rear cargo rack as standard."
    },
    {
        id: 10,
        name: "EBP STORM X",
        tag: "BEST SELLER",
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
        description: "Pure instant power for motocross circuits. With an explosive acceleration from 0 to 50 km/h in 2.1 seconds and an ultralight alloy chassis."
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
        type: "Trail / Adventure",
        rating: 4.9,
        reviews: 76,
        image: "assets/ebp-trail-r.png",
        colorClass: ""
    },
    {
        id: 22,
        name: "EBP ADVENTURE",
        price: 2699.00,
        type: "Trail / Adventure",
        rating: 4.7,
        reviews: 28,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-adventure"
    },
    // --- ACCESORIOS (Para "También te puede interesar") ---
    {
        id: 101,
        name: "Off Road E-Biker Helmet",
        price: 199.00,
        type: "Accessory",
        rating: 4.8,
        reviews: 56,
        image: "assets/ebp-helmet.png",
        colorClass: "",
        description: "High-resistance protective helmet approved for motocross and off-road."
    },
    {
        id: 102,
        name: "Protective Gloves",
        price: 49.00,
        type: "Accessory",
        rating: 4.7,
        reviews: 32,
        image: "assets/ebp-gloves.png",
        colorClass: "",
        description: "Synthetic leather gloves with carbon fiber protectors on knuckles."
    },
    {
        id: 103,
        name: "72V Fast Charger",
        price: 199.00,
        type: "Accessory",
        rating: 4.9,
        reviews: 18,
        image: "assets/ebp-charger.png",
        colorClass: "",
        description: "Intelligent fast charge to cut official charging time in half."
    },
    {
        id: 104,
        name: "Off Road Tire Kit",
        price: 299.00,
        type: "Accessory",
        rating: 4.8,
        reviews: 24,
        image: "assets/ebp-tires.png",
        colorClass: "",
        description: "High-traction, soft compound pair of tires for rocky terrains."
    },
    {
        id: 105,
        name: "Hand Guards",
        price: 59.00,
        type: "Accessory",
        rating: 4.6,
        reviews: 15,
        image: "assets/ebp-guards.png",
        colorClass: "",
        description: "Aerodynamic guards to protect levers and prevent hand impacts."
    },
    // --- BATERÍAS ---
    {
        id: 201,
        name: "72V 40Ah Lithium Battery",
        price: 899.00,
        type: "Battery",
        rating: 4.9,
        reviews: 42,
        image: "fa-battery-full",
        isIcon: true,
        colorClass: "",
        description: "High-density lithium cell battery for maximum autonomy. Compatible with EBP 805 PRO, STORM X, and TRAIL R models."
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

// Header elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');

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
                    <span>Color: White Orange</span>
                    <span class="color-indicator-dot white-orange"></span>
                </div>
                <div class="item-meta-row">
                    <span>Autonomy: 120 km</span>
                </div>
            `;
        } else if (item.id === 10) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Color: Black Orange</span>
                    <span class="color-indicator-dot black-orange"></span>
                </div>
                <div class="item-meta-row">
                    <span>Autonomy: 100 km</span>
                </div>
            `;
        } else if (item.id === 201) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Compatibility: EBP 805 PRO / STORM X / TRAIL R</span>
                </div>
            `;
        } else if (item.type === 'Accessory' || item.isIcon) {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Official warranty: 2 years</span>
                </div>
            `;
        } else {
            detailsHTML = `
                <div class="item-meta-row">
                    <span>Autonomy: ${item.autonomy || 'N/A'} km</span>
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
                    <span class="label-mobile">Price: </span>
                    <span class="price-val">$${formatNumber(item.price)}</span>
                </div>

                <!-- Qty selector -->
                <div class="cart-qty-block">
                    <span class="label-mobile">Quantity: </span>
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
                    <button class="btn-remove-item" onclick="removePageItem(${item.id})" aria-label="Remove item">
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

    subtotalLabel.textContent = `Subtotal (${totalItems} item${totalItems !== 1 ? 's' : ''})`;
    pageSubtotal.textContent = `$${formatNumber(subtotal)}`;
    
    if (shippingCost === 0) {
        pageShipping.textContent = "Free";
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
                        Add to cart <i class="fa-solid fa-cart-plus"></i>
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
    showToast("Product removed from cart.");
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
    showToast(`${product.name} added to cart!`);
};

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Clear cart button
    clearCartBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to empty your shopping cart?")) {
            cart = [];
            saveCartToStorage();
            renderCartPage();
            showToast("Your cart has been emptied.");
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
            calcResult.innerHTML = `<span style="color: var(--tag-discount)">Please enter a valid zip code.</span>`;
            return;
        }

        zipCalcBtn.disabled = true;
        calcResult.innerHTML = `<i class="fa-solid fa-spinner fa-spin orange-text"></i> Calculating shipping cost...`;

        setTimeout(() => {
            zipCalcBtn.disabled = false;
            // 70% chance of free shipping, 30% chance of standard flat rate
            const isFree = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) > 300;
            if (isFree) {
                calcResult.innerHTML = `<span class="green-text"><i class="fa-solid fa-circle-check"></i> Free Shipping to your area with this order!</span>`;
            } else {
                calcResult.innerHTML = `<span style="color: var(--text-secondary)"><i class="fa-solid fa-truck-fast"></i> Estimated cost for Zip ${zip}: $25.00 USD</span>`;
            }
        }, 1200);
    });

    // Checkout button Stripe Simulator
    checkoutBtnPage.addEventListener('click', () => {
        if (cart.length === 0) return;

        checkoutBtnPage.disabled = true;
        checkoutBtnPage.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> PROCESSING STRIPE PAYMENT...`;

        setTimeout(() => {
            showToast("Payment processed with Stripe successfully!");
            
            setTimeout(() => {
                cart = [];
                saveCartToStorage();
                renderCartPage();
                
                checkoutBtnPage.disabled = false;
                checkoutBtnPage.innerHTML = `<i class="fa-solid fa-lock"></i> Proceed to checkout`;

                alert("🎉 Payment simulation successful!\n\nThank you for your purchase at E-BIKER Performance. Your order has been registered through Stripe's secure sandbox.");
            }, 1200);
        }, 2000);
    });

    // Mobile nav toggle hamburger click
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-xmark');
        });
    }

    // Close mobile nav when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && mobileMenuBtn) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
            }
        });
    });

    // Cross-page search handler redirecting to catalog
    const performSearch = (query) => {
        window.location.href = `index.html?search=${encodeURIComponent(query.trim())}`;
    };

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                performSearch(searchInput.value);
            });
        }
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
        const mobSearchBtn = document.getElementById('mobileSearchBtn');
        if (mobSearchBtn) {
            mobSearchBtn.addEventListener('click', () => {
                performSearch(mobileSearchInput.value);
            });
        }
    }

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
